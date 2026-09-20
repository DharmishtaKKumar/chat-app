import { create } from 'zustand';

import type {
  Conversation,
  Message,
} from './types';

//chat state
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

//user chat 
export const useChatStore = create<ChatState>(set => ({
  isLoggedIn: false,

  userName: '',

  conversations: [],

  login: (userName: string) => {
    set({
      isLoggedIn: true,
      userName,
    });
  },

  logout: () => {
    set({
      isLoggedIn: false,
      userName: '',
    });
  },

  addConversation: (name: string) => {
    const conversationId = Date.now().toString();

    const newConversation: Conversation = {
      id: conversationId,
      name,
      messages: [],
    };

    set(state => ({
      conversations: [
        ...state.conversations,
        newConversation,
      ],
    }));

    return conversationId;
  },

  addMessage: (
    conversationId: string,
    message: Message,
  ) => {
    set(state => ({
      conversations: state.conversations.map(
        conversation => {
          if (conversation.id !== conversationId) {
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
      ),
    }));
  },
  updateMessage: (
    conversationId: string,
    messageId: string,
    text: string,
  ) => {
    set(state => ({
      conversations: state.conversations.map(
        conversation => {
          if (conversation.id !== conversationId) {
            return conversation;
          }

          return {
            ...conversation,
            messages: conversation.messages.map(
              message => {
                if (message.id !== messageId) {
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
      ),
    }));
  },
}));