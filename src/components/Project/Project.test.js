import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Project from "./Project";

const noop = () => {};

test("renders projects heading", () => {
  render(
    <MemoryRouter>
      <Project onSelectedCard={noop} />
    </MemoryRouter>
  );
  expect(screen.getByText("Projects I've worked on:")).toBeInTheDocument();
});

test("renders all project cards", () => {
  render(
    <MemoryRouter>
      <Project onSelectedCard={noop} />
    </MemoryRouter>
  );
  expect(screen.getByText("J.A.I LLC Website")).toBeInTheDocument();
  expect(screen.getByText("MadewithLove")).toBeInTheDocument();
  expect(screen.getByText("WTWR")).toBeInTheDocument();
});

test("calls onSelectedCard when a card is clicked", () => {
  const handleSelect = jest.fn();
  render(
    <MemoryRouter>
      <Project onSelectedCard={handleSelect} />
    </MemoryRouter>
  );
  screen.getByText("J.A.I LLC Website").closest("li").click();
  expect(handleSelect).toHaveBeenCalledTimes(1);
  expect(handleSelect).toHaveBeenCalledWith(
    expect.objectContaining({ title: "J.A.I LLC Website" })
  );
});
