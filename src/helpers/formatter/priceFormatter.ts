interface PriceTypes {
  code: string,
  price: number | string,
  symbol: string
}


export const priceFormatter = (code: string, price: number | string): string | undefined  => {

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
