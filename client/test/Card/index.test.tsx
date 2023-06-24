import { render } from "@testing-library/react";
import { Card } from "../../src/components/Card";
import { BrowserRouter } from "react-router-dom";

describe("Componente Card", ()=>{
  const product = {
    id: "MLA1408529234",
    title: "Apple iPhone 11 (128 Gb) - Blanco",
    price: {
      currency: "ARS",
      amount: 340000,
      decimals: 0
    },
    picture: "http://http2.mlstatic.com/D_796892-MLA46114829828_052021-I.jpg",
    condition: "new",
    free_shipping: true
  }
  
  test("Se renderiza correctamente", ()=>{
   const { container } = render(
    <BrowserRouter>
      <Card prod={product}/>
    </BrowserRouter>
    )
    expect(container).toMatchSnapshot();
  })
})