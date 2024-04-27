interface Chat {
  name: string;
}

interface Bot {
  id: string;
}

interface CreateChatContext {
  chat: Chat;
  bot: Bot;
  setBotId: (newBot: Bot) => void;
  setChatName: (newChat: Chat) => void;
}

export type { Bot, Chat, CreateChatContext };
