// import React from 'react';
// import Enzyme, { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import Header from '../header';

// Enzyme.configure({ adapter: new Adapter() });

// describe('MyComponent', () => {
//   it('should render a div with text "Central de atendimento!"', () => {
//     const wrapper = shallow(<Header />);
//     expect(wrapper.find('div').text()).toEqual('Cidade: São Paulo');
//     expect(wrapper.find('div').text()).toEqual('Central de atendimento');
//     expect(wrapper.find('div').text()).toEqual('Lista de desejos');

//   });
// });

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../header";

describe("Header Component", () => {
  test("Deve conter o elemento o Nome do Marktplace", () => {
    render(<Header />);

    const headerNav = screen.getByText("MagaNets");
    expect(headerNav).toBeInTheDocument();
  });
  test("Deve conter o elemento Cidade", () => {
    render(<Header />);

    const headerNav = screen.getByText("Cidade: São Paulo");
    expect(headerNav).toBeInTheDocument();
  });
  test("Deve conter o elemento Central de atencimento", () => {
    render(<Header />);

    const headerNav = screen.getByText("Central de atendimento");
    expect(headerNav).toBeInTheDocument();
  });
  test("Deve conter o elemento Lista de desejos", () => {
    render(<Header />);

    const headerNav = screen.getByText("Lista de desejos");
    expect(headerNav).toBeInTheDocument();
  });
  test("Deve conter a classe div-input", () => {
    render(<Header />);

    const headerNav = screen.getByText("Lista de desejos");
    expect(headerNav).toHaveClass("links-content");
  });
  test("Deve conter a classe div-input", () => {
    render(<Header />);

    const headerNav = screen.getByPlaceholderText("Busca");
    expect(headerNav).toBeInTheDocument();
  });
});
