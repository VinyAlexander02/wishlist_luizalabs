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
