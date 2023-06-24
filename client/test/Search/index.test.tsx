import { render, screen } from '@testing-library/react'
import { Search } from '../../src/components/Search'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

const user = userEvent.setup();

describe("Componente Search", ()=>{
  test("Se renderiza correctamente", ()=>{
    const {container} = render(
      <Search/>, 
      {wrapper: BrowserRouter}
    )
    expect(container).toMatchSnapshot();
  })

  test("Se puede tipear en el input", async()=>{
    render(
      <Search/>, 
      {wrapper: BrowserRouter}
    )
    const input = screen.getByLabelText("Search");
    
    await user.click(input);
    await user.keyboard("arroz");

    expect(input).toHaveValue("arroz")
  })

  test("Redirige en el submit", async()=>{
    render(
      <Search/>, 
      {wrapper: BrowserRouter}
    )
    
    const input = screen.getByLabelText("Search");
    const button = screen.getByRole("button", {name:"buscar producto"})

    await user.click(input);
    await user.keyboard("arroz");
    await user.click(button);

    expect(window.location.pathname).toBe("/items")
    expect(window.location.search).toBe("?q=arroz")

  })
})