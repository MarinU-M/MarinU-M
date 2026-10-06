import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SelfInfo from "./SelfInfo";

test("renders author photo", () => {
  render(
    <MemoryRouter>
      <SelfInfo />
    </MemoryRouter>
  );
  expect(screen.getByAltText("creator icon")).toBeInTheDocument();
});

test("renders intro paragraph", () => {
  render(
    <MemoryRouter>
      <SelfInfo />
    </MemoryRouter>
  );
  expect(screen.getByText(/Hello!/)).toBeInTheDocument();
});

test("links to all projects page", () => {
  render(
    <MemoryRouter>
      <SelfInfo />
    </MemoryRouter>
  );
  const link = screen.getByRole("link", { name: /all of my projects/i });
  expect(link).toHaveAttribute("href", "/projects");
});
