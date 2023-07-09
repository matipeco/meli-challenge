import { render } from "@testing-library/react"
import { ProductNotFound } from "../../src/components/ProductNotFound"

describe("Componente PageNotFound", ()=>{
  test("Se renderiza correctamente", ()=>{
    const { container } = render(
      <ProductNotFound/>
    )

    expect(container).toMatchSnapshot();
  })
})