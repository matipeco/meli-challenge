import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react"
import "./style.scss"
import lupa from "../../assets/ic_Search.png"
import logo from "../../assets/Logo_ML.png"
import { Container } from "../Container"
import { Link, useNavigate } from 'react-router-dom'

export const Search:FunctionComponent = () =>{
  const navigate = useNavigate();

  const currentPath = window.location.pathname;

  const [input, setInput] = useState<string>("");

  const handleSubmit = (ev:FormEvent<HTMLFormElement>)=>{
    if(input === ""){
      ev.preventDefault();
      return
    }
    ev.preventDefault();
    navigate(`/items?q=${input}`);
  }

  const handleChange = (ev: ChangeEvent<HTMLInputElement>)=>{
    setInput(ev.target.value.toLowerCase())
  }
  return(
      <header className="header">
        <Container>
        {currentPath !=="/" &&
         <Link to={"/"}>
            <img className="header__logo" src={logo} alt="" />
         </Link>
         
         }
        <form action="" className="header__form" onSubmit={handleSubmit}>
          <label htmlFor="input">
            <input id="input" className="header__input" 
            type="text" placeholder="Nunca dejes de buscar" 
            value={input} 
            onChange={handleChange}/>
          </label>
          <button className="header__button">
            <img src={lupa} alt="" className="header__button-logo" />
          </button> 
        </form>
        </Container>
      </header>
  )
} 
