import { render, screen } from '@testing-library/react'
import { Products } from '../../src/views/Products'
import { BrowserRouter } from 'react-router-dom'

vi.mock("axios", ()=>{
  return{
    default: { 
      get: vi.fn().mockResolvedValue({
        data: {
          author: {
            name: "Matias",
            lastname:"Pecorale"
          },
          categories:["hola", "chau"],
          items: [{
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
          }]
        }
      })
    },
  }
})

describe("Componente Products", ()=>{
  test("Se renderiza correctamente", async()=>{
   const {container} = render(
      <Products/>, {wrapper:BrowserRouter}
    ) 

    const title = await screen.findByText("Apple iPhone 11 (128 Gb) - Blanco");

    expect(container).toMatchSnapshot();
  })
})