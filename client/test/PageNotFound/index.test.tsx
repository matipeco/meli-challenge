import { render } from "@testing-library/react"
import { PageNotFound } from "../../src/components/PageNotFound"

describe("Componente PageNotFound", ()=>{
  test("Se renderiza correctamente", ()=>{
    const { container } = render(
      <PageNotFound/>
    )

    expect(container).toMatchSnapshot();
  })
})