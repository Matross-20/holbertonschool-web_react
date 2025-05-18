import { render, screen } from "@testing-library/react";
import App from "./App";

test("h1 element with the text School Dashboard is rendered", () => {
  render(<App />);
  const heading = screen.getByRole("heading", { name: /School Dashboard/i });
  expect(heading).toBeInTheDocument();
});

test("the text content within the 2 p elements in the app-body and app-footer divs matches", () => {
  render(<App />);
  const divbody = screen.getByText(/Login to access the full dashboard/i);
  const divfooter = screen.getByText(/Copyright 2025 - holberton School/i);

  expect(divbody).toBeInTheDocument();
  expect(divfooter).toBeInTheDocument();
});

test("an img element is rendered", () => {
  render(<App />);
  const image = screen.getByAltText(/holberton logo/i);
  expect(image).toBeInTheDocument();
});

test("renders two input elements", () => {
  // Render component
  render(<App />);

  //Get input elements
  const inputElements = screen.getAllByRole("textbox");
  const inputLength = inputElements.length;

  // Assert element
  expect(inputLength).toEqual(1);
});

test("renders two label elements with text 'emai' & 'password'", () => {
  // Render component
  render(<App />);

  // Get labels
  const labelElements = screen.getAllByLabelText();
  const labelsLength = labelElements.length;

  // Assert elements and values
  expect(labelsLength).toEqual(1);
  expect(labelElements[0]).toEqual(/Email/i);
  expect(labelElements[1]).toEqual(/Password/i);
});

// test("renders two label elements with text 'emai' & 'password'", () => {
//   // Render component
//   render(<App />);

//   // Get labels
//   const labelElements = screen.getAllByLabelText();
//   // const email = screen.getByLabelText(/Email/i);
//   // const password = screen.getByLabelText(/Password/i);

//   //Get button
//   const submitButton = screen.getByRole("button");

//   // Assert elements
//   expect(inputLength).toEqual(1);
//   expect(email).toBeInTheDocument();
//   expect(password).toBeInTheDocument();
//   expect(submitButton.textContent).toBe("OK");
// });
