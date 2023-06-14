import { useParams } from "react-router-dom";
import { Container } from "../../components/Container"
import { useEffect, useState } from "react";
import axios from "axios";
import { DetailProduct, DetailResponse } from "../../types";
import './style.scss';

export const Detail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<DetailProduct>();
  const [categories, setCategories] = useState<string[] | undefined>();

  const getDetail = async()=>{
    const { data } = await axios.get<DetailResponse>(`http://localhost:3001/api/items/${id}`);
    setProduct(data.item)
    setCategories(data.categories)
  }

  useEffect(()=>{
    getDetail();
  },[])
  
  if(!product) return null;
  
  const priceFormat = product.price.amount.toLocaleString('es-AR', {
    style: 'currency',
    currency: product.price.currency,
    minimumFractionDigits: 0,
  })

  const getDecimals = (decimals:number) =>{
    if(decimals === 0){
      return "00"
    }
    else if(decimals < 10 ){
      return `0${decimals}`
    }
    return decimals;
  }

  return(
    <main>
      <Container>
        {categories?.map((cat)=>{
          return <span key={product.id}>{cat}</span>
        })}
        <article className="detail__container">
          
          <img className="detail__image" src={product.picture} alt={product.title} />
          
          <div className="detail__contain">
            <p className="detail__condition">{product.condition} - {product.sold_quantity} {product.sold_quantity === 1 ? "vendido" : "vendidos"} </p>
            <h2 className="detail__title">
              {product.title}
            </h2>
            <p className="detail__price">{priceFormat}
              <sup>{getDecimals(product.price.decimals)}</sup> 
            </p>
            <button className="detail__button">Comprar</button>
          </div>
          
          <p>{product.description}</p>
        </article>
      </Container>
    </main>
  )
}