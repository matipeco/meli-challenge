import { FunctionComponent, useEffect, useState } from "react";
import axios from "axios";
import { Container } from "../../components/Container";
import { SearchResponse } from "../../types";
import { useLocation } from "react-router-dom";
import { Card } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Spinner } from "../../components/Spinner";
import './style.scss';

export const Products: FunctionComponent = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const q = params.get('q');

  const [info, setInfo] = useState<SearchResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(true); 
  const [error, setError] = useState<boolean>(false)

  const getProducts = async () => {
    try {
      const { data } = await axios.get<SearchResponse>(`http://localhost:3001/api/items?q=${q}`);
      setInfo(data);
      setIsLoading(false); 

    } catch (error) {
      console.log(`No hay publicaciones que coincidan con tu búsqueda`);
      setIsLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    getProducts()
  }, [q])

  return (
    <main className="container-cards">
      <Container>
        {error && <h2>No hay publicaciones que coincidan con tu búsqueda</h2>}
        {isLoading ? (
         <Spinner/>
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
