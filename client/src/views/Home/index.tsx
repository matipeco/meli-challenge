import { Container } from "../../components/Container"
import './style.scss'
import landing from '../../assets/meli-background.png'

export const Home =()=>{
  return(
    <main className="landing__container">
      <Container>
        <img className="landing__background" src={landing} alt="mercadolibre landing" width="500" />
      </Container>
    </main>
  )
}