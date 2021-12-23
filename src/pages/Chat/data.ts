type ChatType = {
  id: string;
  sender: string;
  message: string;
  sendedAt: Date;
};

export const messages: ChatType[] = [];
