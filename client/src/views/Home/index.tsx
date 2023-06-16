import { Container } from "../../components/Container"
import './style.scss'
import landing from '../../assets/meli-background.png'
// import logo from '../../assets/Logo_ML@2x.png.png.png'

export const Home =()=>{
  return(
    <main className="landing__container">
      <Container>
          {/* <img className="landing__logo" src={logo} alt="" /> */}
          <img className="landing__background" src={landing} alt="mercadolibre landing" />
      </Container>
    </main>
  )
}