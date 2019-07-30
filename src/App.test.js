import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

it("changes via getByLabelText", () => {
  const { getByLabelText, getByDisplayValue } = render(<App />);
  const selectElement = getByLabelText("Fruit");
  fireEvent.change(selectElement, { target: { value: "grapefruit" } });
  // assert value
  expect(selectElement.value).toBe("grapefruit");
  // assert text
  getByDisplayValue("Grapefruit");
});

it("changes via getByPlaceholderText", () => {
  const { getByPlaceholderText, getByDisplayValue } = render(<App />);
  const selectElement = getByPlaceholderText("select a fruit");
  fireEvent.change(selectElement, { target: { value: "coconut" } });
  // assert value
  expect(selectElement.value).toBe("coconut");
  // assert text
  getByDisplayValue("Coconut");
});
