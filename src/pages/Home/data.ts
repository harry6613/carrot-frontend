type TradeItem = {
  id: string;
  imageUrl: string;
  title: string;
  location: string;
  createAt: Date;
  updateAt?: Date;
  price: number;
  chat?: number;
  interest?: number;
};
export const tradeItems: TradeItem[] = [
  {
    id: "id1",
    imageUrl: "",
    title: "말 안듣는 사람 혼내주실분",
    createAt: new Date(),
    location: "남양주시",
    price: 10000,
  },
];
