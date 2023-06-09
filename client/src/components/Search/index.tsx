import { FunctionComponent } from "react"
import "./style.scss"
import lupa from "../../assets/ic_Search.png"
import logo from "../../assets/Logo_ML.png"
import { Container } from "../Container"

export const Search:FunctionComponent = () =>{
  return(
      <header className="header">
        <Container>
        <img className="header__logo" src={logo} alt="" />
        <input className="header__input" type="text" placeholder="Nunca dejes de buscar"/>
        <button className="header__button">
          <img src={lupa} alt="" className="header__button-logo" />
        </button>
        </Container>
      </header>
    
  )
} 
