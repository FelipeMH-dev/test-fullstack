import { render, screen } from "@testing-library/react";
import { ItemCard } from "../components/ItemCard";
import type { Item } from "../types";
import "@testing-library/jest-dom";

const mockItem: Item = {
  id: 1,
  date: "2025-07-13",
  fullName: "Felipe Mansilla",
  amount: 1500,
  country: "Chile",
  agentType: "Agente A",
  status: "Activo",
};

describe("ItemCard", () => {
  it("renderiza los datos correctamente", () => {
    render(<ItemCard item={mockItem} />);

    expect(screen.getByText("ID: 1")).toBeInTheDocument();
    expect(screen.getByText("Felipe Mansilla")).toBeInTheDocument();
    expect(screen.getByText("Chile · Agente A")).toBeInTheDocument();
    expect(screen.getByText("2025-07-13")).toBeInTheDocument();
    expect(screen.getByText("$")).toBeInTheDocument();
    expect(
      screen.getByText((_, el) => el?.textContent === "$1.500"),
    ).toBeInTheDocument();
    expect(screen.getByText("Activo")).toBeInTheDocument();
  });
});
