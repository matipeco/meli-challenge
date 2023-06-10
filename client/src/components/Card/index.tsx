import { FunctionComponent } from "react"
import { Product } from "../../types"

type Props = {
  prod: Product;
}

export const Card:FunctionComponent<Props> = ({prod
})=>{
  return(
    <article>
      <h1>{prod.title}</h1>
    </article>
  )
}