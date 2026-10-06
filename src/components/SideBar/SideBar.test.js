import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SideBar from "./SideBar";

test("shows All projects link on home page", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <SideBar />
    </MemoryRouter>
  );
  expect(screen.getByText("All projects")).toBeInTheDocument();
});

test("shows Home link on projects page", () => {
  render(
    <MemoryRouter initialEntries={["/projects"]}>
      <SideBar />
    </MemoryRouter>
  );
  expect(screen.getByText("Home")).toBeInTheDocument();
});

test("renders Email and LinkedIn links", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <SideBar />
    </MemoryRouter>
  );
  expect(screen.getByText("Email")).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /linkedin/i })
  ).toHaveAttribute("target", "_blank");
});
