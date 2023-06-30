import { FunctionComponent, useEffect, useState } from "react";
import axios from "axios";
import { Container } from "../../components/Container";
import { SearchResponse } from "../../types";
import { useLocation } from "react-router-dom";
import { Card } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Spinner } from "../../components/Spinner";
import './style.scss';
import { ProductNotFound } from "../../components/ProductNotFound";

export type Status = "initial" | "loading" | "error" | "success";

export const Products: FunctionComponent = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const q = params.get('q');

  const [info, setInfo] = useState<SearchResponse>();
  const [status, setStatus] = useState<Status>("initial");

  const getProducts = async () => {
    try {
      setStatus("loading");
      const { data } = await axios.get<SearchResponse>(`http://localhost:3001/api/items?q=${q}`);
      setInfo(data);
      setStatus("success");

    } catch (error) {
      setStatus("error")
    }
  }

  useEffect(() => {
    getProducts()
  }, [q])

  return (
    <main className="container-cards">
      <Container>
        {status === "error" && <ProductNotFound/>}
        {status === "loading" && <Spinner/>}
        {status === "success" && <>
          {info?.categories === undefined ? null : <Breadcrumb categories={info?.categories} />}
          {info?.items.map((prod) => (
            <Card prod={prod} key={prod.id} />
          ))}
        </>}
      </Container>
    </main>
  )
}
