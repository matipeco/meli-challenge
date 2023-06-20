import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Breadcrumb } from '../../src/components/Breadcrumb';

describe("Componente Breadcrumb", ()=>{
  test('Renderiza las categorias', ()=>{
    const { container } = render(
      <Breadcrumb categories={["Almacen", "Supermercado", "Alimentos"]}/>
    )
    expect(container).toMatchSnapshot();
  })
})