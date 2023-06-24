import { render } from '@testing-library/react'
import { Home } from '../../src/views/Home'

describe("Componente Home", ()=>{
  test("Se renderiza correctamente", ()=>{
    const {container} = render(
      <Home/>
    )
    expect(container).toMatchSnapshot();
  })
})