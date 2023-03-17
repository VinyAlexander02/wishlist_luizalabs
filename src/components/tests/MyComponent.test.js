import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../header";

describe("Page Components", () => {
  test("Should contain the element with Marktplace name 'MagaNets' ", () => {
    render(<Header />);

    const headerNav = screen.getByText("MagaNets");
    expect(headerNav).toBeInTheDocument();
  });

  test("Should contain the element 'Cidade'", () => {
    render(<Header />);

    const headerNav = screen.getByText("Cidade: São Paulo");
    expect(headerNav).toBeInTheDocument();
  });

  test("Should contain the element 'Central de atencimento'", () => {
    render(<Header />);

    const headerNav = screen.getByText("Central de atendimento");
    expect(headerNav).toBeInTheDocument();
  });

  test("Should contain the element 'Lista de desejos'", () => {
    render(<Header />);

    const headerNav = screen.getByText("Lista de desejos");
    expect(headerNav).toBeInTheDocument();
  });

  test("Should contain the class name links-content in element 'Lista de desejos'", () => {
    render(<Header />);

    const headerNav = screen.getByText("Lista de desejos");
    expect(headerNav).toHaveClass("links-content");
  });

  test("Should contain the Placeholder text 'Busca'", () => {
    render(<Header />);

    const headerNav = screen.getByPlaceholderText("Busca");
    expect(headerNav).toBeInTheDocument();
  });
});
