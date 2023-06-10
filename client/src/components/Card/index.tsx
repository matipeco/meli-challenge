import { FunctionComponent } from "react"
import { Product } from "../../types"
import './style.scss'

type Props = {
  prod: Product;
}

export const Card:FunctionComponent<Props> = ({prod
})=>{
  return(
    <article className="card__container">
      <h1>{prod.title}</h1>
    </article>
  )
}