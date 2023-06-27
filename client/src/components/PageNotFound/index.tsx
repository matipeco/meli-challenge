import { FunctionComponent } from "react";
import pageNot from '../../assets/pagenot.svg'
import './style.scss'

export const PageNotFound:FunctionComponent = () =>{
  return(
      <div className="page-not__div">
        <img src={pageNot} alt="" width="20" height="20" />
        <p>Parece que esta página no existe...</p>
      </div>
  )
}