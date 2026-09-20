import { Message } from '../Helper/types';

const generateMockResponse = (
  messages: Message[],
): string => {
  const lastMessage = messages[messages.length - 1];

  return `Thanks for your message: "${lastMessage?.text}". I understand what you're saying.`;
};

export const streamChatResponse = async (
  messages: Message[],
  onChunk: (chunk: string) => void,
): Promise<void> => {
  const response = generateMockResponse(messages);

  for (let index = 0; index < response.length; index++) {
    await new Promise(resolve =>
      setTimeout(resolve, 35),
    );

    onChunk(response[index]);
  }
};