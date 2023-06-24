import {render} from '@testing-library/react';
import { Container } from '../../src/components/Container';

describe("Componente Container", ()=>{
  test("Renderiza children correctamente", ()=>{
    const { container } = render(
      <Container>
        <h2>Hola</h2>
        <p>Testeando</p>
      </Container>
    )
    expect(container).toMatchSnapshot();
  })
})