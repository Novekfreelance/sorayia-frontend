// types.ts
interface Preferences {
  name: string;
  prompt: string;
  description: string;
  language: string;
  model: string;
}

interface Avatar {
  id: string;
  name: string;
  url: string;
}

interface Folders {
  id: string;
  name: string;
}

interface CreateBotContext {
  step: string;
  preferences: Preferences;
  avatar: Avatar;
  folders: Folders;
  clearForm?: boolean;
  setClearForm?: (newClearForm: boolean) => void;
  setStep: (newStep: string) => void;
  setPreferences: (newPreferences: Preferences) => void;
  setAvatar: (newAvatar: Avatar) => void;
  setFolders: (newFolders: Folders) => void;
}

export type { Avatar, CreateBotContext, Folders, Preferences };
