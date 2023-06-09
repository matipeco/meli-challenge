import { FunctionComponent } from "react"
import "./style.scss"
import lupa from "../../assets/ic_Search.png"
import logo from "../../assets/Logo_ML.png"

export const Search:FunctionComponent = () =>{
  return(
      <header className="header">
        <img className="header__logo" src={logo} alt="" />
        <input className="header__input" type="text" placeholder="Nunca dejes de buscar"/>
        <button>
          <img src={lupa} alt=""  />
        </button>
      </header>
    
  )
} 
