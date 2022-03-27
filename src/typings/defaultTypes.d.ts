export type Product = {
  id: number;
  title: string;
  content: string;
  price: number;
};

export type CartProduct = {
  productID: number;
  amount: number;
};
