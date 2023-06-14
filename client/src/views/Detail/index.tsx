import { useParams } from "react-router-dom";
import { Container } from "../../components/Container"
import { useEffect, useState } from "react";
import axios from "axios";
import { DetailProduct, DetailResponse } from "../../types";

export const Detail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<DetailProduct>();

  const getDetail = async()=>{
    const { data } = await axios.get<DetailResponse>(`http://localhost:3001/api/items/${id}`);
    setProduct(data.item)
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
        <article>
          <img src={product.picture} alt="" />
          <p>{product.condition} - {product.sold_quantity} {product.sold_quantity === 1 ? "vendido" : "vendidos"} </p>
          <h2>
            {product.title}
          </h2>
          <p>{priceFormat}
           <sup>{getDecimals(product.price.decimals)}</sup> 
          </p>
          <button>Comprar</button>
        </article>
      </Container>
    </main>
  )
}