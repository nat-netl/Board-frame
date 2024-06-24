export interface IProduct {
  id: number;
  brand: string;
  name: string;
  image?: string;
  big_image?: string;
  price: number;
  description?: string;
  instock?: boolean;
  amount: number | undefined;
}

export interface IProductsInHomePage {
  inHomePage?: string;
}
