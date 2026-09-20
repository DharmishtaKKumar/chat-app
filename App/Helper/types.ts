export type MessageSender = 'user' | 'bot';

export interface Message {
  id: string;
  text: string;
  sender: MessageSender;
  timestamp: number;
}

export interface Conversation {
  id: string;
  name: string;
  messages: Message[];
}