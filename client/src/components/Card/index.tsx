import { FunctionComponent } from "react"
import { Product } from "../../types"
import './style.scss'
import shipping from '../../assets/ic_shipping.png'
import { Link } from "react-router-dom"

type Props = {
  prod: Product;
}

export const Card:FunctionComponent<Props> = ({prod
})=>{

  const priceFormat = prod.price.amount.toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
  })
  
  return(
      <article className="card__container">
        <Link to={`/items/${prod.id}`}>
          <img className="card__image" src={prod.picture} alt={prod.title}/>
        </Link>
        
        <div className="card__div">
          <p className="card__contain-price">
            {priceFormat}
            <img className="card__contain-shipping" src={shipping} alt="" />  
          </p>
          <p className="card__contain-title">{prod.title}</p>
        </div>
        <p className="card__location">Capital Federal</p>
      </article>
  )
}