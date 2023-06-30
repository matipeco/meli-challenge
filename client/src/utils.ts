import { DetailProduct } from "./types";

export const getDecimals = (decimals:number) =>{
  if(decimals === 0){
    return "00"
  }
  else if(decimals < 10 ){
    return `0${decimals}`
  }
  return decimals;
}

export const priceFormat = (product:DetailProduct ) => product.price.amount.toLocaleString('es-AR', {
  style: 'currency',
  currency: product.price.currency,
  minimumFractionDigits: 0,
});

export const descriptionArray = (product:DetailProduct) => product.description.split("\n").filter((str)=> str);