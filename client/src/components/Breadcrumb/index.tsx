import { FunctionComponent } from "react";
import './style.scss';

type Props ={
  categories: string[];
}

export const Breadcrumb:FunctionComponent<Props> = ({categories}) => {
  if(categories.length === 0) return null;
  return(
    <ol className="breadcrumb">
     {categories.map((cat)=>{
          return <li key={cat}>
              <a href="#">{cat}</a>
            </li>
        })}
    </ol>
  )
}