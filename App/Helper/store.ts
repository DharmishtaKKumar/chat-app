import { create } from 'zustand';
import { MMKV } from 'react-native-mmkv';
import type {
  Conversation,
  Message,
} from './types';

 const storage = new MMKV();

const CONVERSATIONS_KEY = 'conversations';
const USER_KEY = 'user';

const loadConversations = (): Conversation[] => {
  try {
    const storedConversations =
      storage.getString(CONVERSATIONS_KEY);

    if (!storedConversations) {
      return [];
    }

    return JSON.parse(storedConversations);
  } catch (error) {
    console.log(
      'Failed to load conversations:',
      error,
    );

    return [];
  }
};

const saveConversations = (
  conversations: Conversation[],
) => {
  try {
    storage.set(
      CONVERSATIONS_KEY,
      JSON.stringify(conversations),
    );
  } catch (error) {
    console.log(
      'Failed to save conversations:',
      error,
    );
  }
};

const loadUser = () => {
  try {
    const storedUser = storage.getString(USER_KEY);

    if (!storedUser) {
      return {
        isLoggedIn: false,
        userName: '',
      };
    }

    return JSON.parse(storedUser);
  } catch (error) {
    console.log(
      'Failed to load user:',
      error,
    );

    return {
      isLoggedIn: false,
      userName: '',
    };
  }
};

interface ChatState {
  isLoggedIn: boolean;
  userName: string;

  conversations: Conversation[];

  login: (userName: string) => void;
  logout: () => void;

  addConversation: (name: string) => string;

  addMessage: (
    conversationId: string,
    message: Message,
  ) => void;

  updateMessage: (
    conversationId: string,
    messageId: string,
    text: string,
  ) => void;
}

const savedUser = loadUser();

export const useChatStore = create<ChatState>(
  set => ({
    isLoggedIn: savedUser.isLoggedIn,
    userName: savedUser.userName,

    conversations: loadConversations(),

    login: (userName: string) => {
      const user = {
        isLoggedIn: true,
        userName,
      };

      storage.set(
        USER_KEY,
        JSON.stringify(user),
      );

      set(user);
    },

    logout: () => {
    storage.delete(USER_KEY);

      set({
        isLoggedIn: false,
        userName: '',
      });
    },

    addConversation: (name: string) => {
      
      const conversationId =
        `${Date.now()}-${Math.random()
          .toString(36)
          .substring(2, 9)}`;

      // const newConversation: Conversation = {
      //   id: conversationId,
      //   name,
      //   messages: [],
      // };

      set(state => {
               const newConversation: Conversation = {
          id: conversationId,
          name,
          userId: state.userName,
          messages: [],
        };
        const conversations = [
          ...state.conversations,
          newConversation,
        ];

        saveConversations(conversations);

        return {
          conversations,
        };
      });

      return conversationId;
    },

    addMessage: (
      conversationId: string,
      message: Message,
    ) => {
      set(state => {
        const conversations =
          state.conversations.map(
            conversation => {
              if (
                conversation.id !==
                conversationId
              ) {
                return conversation;
              }

              return {
                ...conversation,
                messages: [
                  ...conversation.messages,
                  message,
                ],
              };
            },
          );

        saveConversations(conversations);

        return {
          conversations,
        };
      });
    },

    updateMessage: (
      conversationId: string,
      messageId: string,
      text: string,
    ) => {
      set(state => {
        const conversations =
          state.conversations.map(
            conversation => {
              if (
                conversation.id !==
                conversationId
              ) {
                return conversation;
              }

              return {
                ...conversation,

                messages:
                  conversation.messages.map(
                    message => {
                      if (
                        message.id !==
                        messageId
                      ) {
                        return message;
                      }

                      return {
                        ...message,
                        text,
                      };
                    },
                  ),
              };
            },
          );

        saveConversations(conversations);

        return {
          conversations,
        };
      });
    },
  }),
);