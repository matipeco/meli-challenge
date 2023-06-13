import { FunctionComponent, useEffect, useState } from "react"
import { Container } from "../../components/Container"
import axios from 'axios';
import { SearchResponse } from "../../types";
import { useLocation } from "react-router-dom";
import { Card } from "../../components/Card";
import './style.scss'

export const Products:FunctionComponent = () => { 
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const q = params.get('q');

  const [info, setInfo] = useState<SearchResponse>();

  const getProducts = async() =>{
    try {
      const { data } = await axios.get<SearchResponse>(`http://localhost:3001/api/items?q=${q}`);
      setInfo(data);
      console.log(data)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect( ()=>{
    getProducts()
  },[q])

  {console.log(info?.categories)}
  return(
   <main className="container-cards">
    <Container>
        {info?.categories.map((cat)=>{
          return(
            <span className="categories">{cat} - </span>
          )
        })}
      {info?.items.map((prod)=>{
        return(
          <Card prod={prod}/>
        )
      })}
    </Container>
   </main> 
  )
}