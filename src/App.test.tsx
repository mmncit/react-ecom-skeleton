import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

function mountComponent() {
  return render(<App />);
}

test("renders visit us button", () => {
  mountComponent();
  screen.debug();
  const buttonElement = screen.queryByText("Visit us");
  expect(buttonElement).toBeTruthy();
});

test("renders food menu tooltip", () => {
  mountComponent();
  screen.debug();
  const buttonElement = screen.getByTitle(/see the food menu/i);
  expect(buttonElement).toBeInTheDocument();
});
