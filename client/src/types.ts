
export type SearchResponse = {
  author: {
    name: string
    lastname:string
  }
  categories: string[]
  items: Product[]
}

export type Product = {
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
