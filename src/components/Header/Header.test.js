import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

test("renders author name as a link", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const link = screen.getByRole("link", { name: "Marin Umegane" });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/");
});
