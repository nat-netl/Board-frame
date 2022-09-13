export interface IProduct { 
  id: number,
  brand: string,
  name: string,
  image?: string,
  price: number,
  description?: string,
  instock?: boolean,
}