import { FunctionComponent, useEffect, useState } from "react";
import { Container } from "../../components/Container";
import axios from 'axios';
import { SearchResponse } from "../../types";
import { useLocation } from "react-router-dom";
import { Card } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";
import spinner from '../../assets/spinner.svg'
import './style.scss';

export const Products: FunctionComponent = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const q = params.get('q');

  const [info, setInfo] = useState<SearchResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(true); 
  
  const getProducts = async () => {
    try {
      const { data } = await axios.get<SearchResponse>(`http://localhost:3001/api/items?q=${q}`);
      setInfo(data);
      setIsLoading(false); 

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts()
  }, [q])

  return (
    <main className="container-cards">
      <Container>
        {isLoading ? (
          <img src={spinner} alt="" width="40" height="40" />
        ) : (
          <>
            {info?.categories === undefined ? null : <Breadcrumb categories={info?.categories} />}
            {info?.items.map((prod) => (
              <Card prod={prod} key={prod.id} />
            ))}
          </>
        )}
      </Container>
    </main>
  )
}
