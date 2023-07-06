import {waitForElementToBeRemoved, render, screen,} from '@testing-library/react';
import { Detail } from '../../src/views/Detail'
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios'

describe("Componente Detail", ()=>{
  const axiosSpy = vi.spyOn(axios, "get").mockResolvedValue({
    data: {
      author: {
        name: "Matias",
        lastname:"Pecorale"
      },
      categories:["Celulares", "Iphone"],
      item: {
        id: "MLA1408529234",
        title: "Apple iPhone 11 (128 Gb) - Blanco",
        price: {
          currency: "ARS",
          amount: 340000,
          decimals: 0
        },
        picture: "http://http2.mlstatic.com/D_796892-MLA46114829828_052021-I.jpg",
        condition: "new",
        free_shipping: true,
        sold_quantity: 454545,
        description: "asdasda"
      }
    }
  })

  test("Se renderiza correctamente", async()=>{
    const {container} = render(
      <Detail/>, {wrapper:BrowserRouter}
    )

    const button = await screen.findByRole("button");

    expect(container).toMatchSnapshot();
  })

  test("Renderiza ProductNotFound si no se encuentra el producto", async()=>{
    axiosSpy.mockRejectedValueOnce({
      response:{
        status:404
      }
    })
    const {container} = render(
      <Detail/>, {wrapper:BrowserRouter}
    )
    
    await waitForElementToBeRemoved(screen.getByAltText("cargando"))

    expect(container).toMatchSnapshot();
  })
})