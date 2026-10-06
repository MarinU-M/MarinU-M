import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("renders copyright notice", () => {
  render(<Footer />);
  expect(screen.getByText(/© 2026 Marin Umegane/)).toBeInTheDocument();
});
