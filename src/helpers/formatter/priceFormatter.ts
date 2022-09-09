interface PriceTypes {
  code: string,
  price: number ,
  symbol: string
}


export const priceFormatter = (code: string, price: number): string | undefined  => {

  switch (code) {
    case "RUB":
      const RUB: PriceTypes | undefined = {
        code: 'RUB',
        price: price,
        symbol: '₽'
      }
      return `${RUB.price} ${RUB.symbol}`;
  
    default:
      break;
  }
}
