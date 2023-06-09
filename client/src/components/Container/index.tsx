import { FunctionComponent, PropsWithChildren } from "react"
import "./style.scss"

export const Container:FunctionComponent<PropsWithChildren> = ({children})=>{
  return(
    <div className="container">
      {children}
    </div>
  )
}