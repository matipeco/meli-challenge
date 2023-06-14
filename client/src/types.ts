
export type Response = {
  author: {
    name: string
    lastname:string
  }
  categories: string[]
}

export interface SearchResponse extends Response {
  items: Product[]
}
export interface DetailResponse extends Response {
  item: DetailProduct
}

export interface Product {
  id: string
  title: string
  price: {
    currency: string
    amount: number
    decimals: number
  }
  picture: string
  condition: string
  free_shipping: boolean
}

export interface DetailProduct extends Product{
  sold_quantity: number,
  description: string
}


