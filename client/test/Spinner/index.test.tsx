import { render } from '@testing-library/react'
import { Spinner } from '../../src/components/Spinner'

describe("Componente Spinner", ()=>{
  test("Se renderiza correctamente", ()=>{
    const { container } = render(
      <Spinner/>
    )
    expect(container).toMatchSnapshot();
  })
})