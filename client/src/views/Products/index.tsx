import { FunctionComponent, useEffect, useState } from "react"
import { Container } from "../../components/Container"
import axios from 'axios';
import { SearchResponse } from "../../types";
import { useLocation } from "react-router-dom";

export const Products:FunctionComponent = () => { 
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const q = params.get('q');

  const [info, setInfo] = useState<SearchResponse>();

  const getProducts = async() =>{
    try {
      const { data } = await axios.get<SearchResponse>(`http://localhost:3001/api/items?q=${q}`);
      setInfo(data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect( ()=>{
    getProducts()
  },[q])

  return(
   <main>
    <Container>
      Products
    </Container>
   </main> 
  )
}