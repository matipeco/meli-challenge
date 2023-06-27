import { FunctionComponent } from "react";
import pageNot from '../../assets/pagenot.svg'
import { Container } from "../Container";
import './style.scss'

export const PageNotFound:FunctionComponent = () =>{
  return(
    <Container>
      <main className="page-not__main">
        <img src={pageNot} alt="" width="20" height="20" />
        <p>Parece que esta página no existe...</p>
      </main>
    </Container>
  )
}