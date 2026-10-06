import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./components/App/App";

test("renders without crashing", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText("Marin Umegane")).toBeInTheDocument();
});
