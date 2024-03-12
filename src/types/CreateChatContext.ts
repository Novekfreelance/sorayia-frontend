interface Chat {
  id: string;
  name: string;
}

interface Bot {
  id: string;
}

interface CreateChatContext {
  step: string;
  chat: Chat;
  bot: Bot;
  setStep: (newStep: string) => void;
  setBot: (newBot: Bot) => void;
  setChatName: (newChat: Chat) => void;
}

export type { Bot, Chat, CreateChatContext };
