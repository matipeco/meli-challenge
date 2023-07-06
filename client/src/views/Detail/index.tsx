import { useParams } from "react-router-dom";
import { Container } from "../../components/Container"
import { useEffect, useState } from "react";
import axios from "axios";
import { DetailProduct, DetailResponse } from "../../types";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Spinner } from "../../components/Spinner";
import './style.scss';
import { Status } from "../Products";
import { ProductNotFound } from "../../components/ProductNotFound";
import { descriptionArray, getDecimals, priceFormat } from "../../utils";

export const Detail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<DetailProduct>();
  const [categories, setCategories] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("initial");
  
  const getDetail = async() => {
    try {
      setStatus("loading")
      const { data } = await axios.get<DetailResponse>(`http://localhost:3001/api/items/${id}`);
      setStatus("success")
      setProduct(data.item)
      setCategories(data.categories)
    } catch (error) {
      setStatus("error")
    }
  }
  
  useEffect(()=>{
    getDetail();
  },[])
  
  return(
    <main className="main__detail">
      <Container>
      {status === "loading" && <Spinner/>}
      {status === "error" && <ProductNotFound/>}
      {status === "success" && product && (
      <>
          <Breadcrumb categories={categories}/>
          <article className="detail__container">
            <img className="detail__image" src={product.picture} alt={product.title} />
            
            <div className="detail__contain">
              <p className="detail__condition">{product.condition} - {product.sold_quantity} {product.sold_quantity === 1 ? "vendido" : "vendidos"} </p>
              <h2 className="detail__title">
                {product.title}
              </h2>
              <p className="detail__price">{priceFormat(product)}
                <sup className="detail__decimals">{getDecimals(product.price.decimals)}</sup> 
              </p>
              <button className="detail__button">Comprar</button>
            </div>
            <div className="detail__container-div">
              {descriptionArray.length !== 0 && 
                <h3 className="detail__description-title">Descripción del producto</h3>
                }
              {descriptionArray(product).map((paragraph)=>{
                return(
                  <p className="detail__description-text" key={paragraph}>{paragraph}</p>
                )
              })}
            </div>
          </article>
      </>
      )}
      </Container>
    </main>
  )
}
