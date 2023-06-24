import { useParams } from "react-router-dom";
import { Container } from "../../components/Container"
import { useEffect, useState } from "react";
import axios from "axios";
import { DetailProduct, DetailResponse } from "../../types";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Spinner } from "../../components/Spinner";
import './style.scss';

export const Detail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<DetailProduct>();
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  const getDetail = async() => {
    try {
      const { data } = await axios.get<DetailResponse>(`http://localhost:3001/api/items/${id}`);
      setIsLoading(false)
      setProduct(data.item)
      setCategories(data.categories)
      
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
    getDetail();
  },[])
  
  console.log(product)

  const getDecimals = (decimals:number) =>{
    if(decimals === 0){
      return "00"
    }
    else if(decimals < 10 ){
      return `0${decimals}`
    }
    return decimals;
  }
  
  if(!product) return <Spinner/>;

  const priceFormat = product.price.amount.toLocaleString('es-AR', {
    style: 'currency',
    currency: product.price.currency,
    minimumFractionDigits: 0,
  })
  
  const descriptionArray = product.description.split("\n").filter((str)=> str);
  
  return(
    <main className="main__detail">
      <Container>
        <Breadcrumb categories={categories}/>
        <article className="detail__container">
          <img className="detail__image" src={product.picture} alt={product.title} />
          
          <div className="detail__contain">
            <p className="detail__condition">{product.condition} - {product.sold_quantity} {product.sold_quantity === 1 ? "vendido" : "vendidos"} </p>
            <h2 className="detail__title">
              {product.title}
            </h2>
            <p className="detail__price">{priceFormat}
              <sup className="detail__decimals">{getDecimals(product.price.decimals)}</sup> 
            </p>
            <button className="detail__button">Comprar</button>
          </div>
          <div className="detail__container-div">
            {descriptionArray.length !== 0 && 
              <h3 className="detail__description-title">Descripción del producto</h3>
              }
            {descriptionArray?.map((paragraph)=>{
              return(
                <p className="detail__description-text" key={paragraph}>{paragraph}</p>
              )
            })}
          </div>
        </article>
      </Container>
    </main>
  )
}
