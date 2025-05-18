import { render, screen } from "@testing-library/react";
import App from "./App";

it("Should render h1 element with the text 'School Dashboard' ", () => {
  // Render App component
  render(<App />);

  // Fetch h1 tag
  const h1Element = screen.getByRole("heading");

  // Assert h1 text
  expect(h1Element.textContent).toEqual("School Dashboard");
});

it("Renders p tags with correct text ", () => {
  // Render App component
  render(<App />);

  // Fetch h1 tag
  const paragraphs = screen.getAllByRole("paragraph");

  // Assert p texts
  expect(paragraphs[0].textContent).toEqual(
    "Login to access the full dashboard"
  );
  expect(paragraphs[1].textContent).toEqual(
    "Copyright 2025 - holberton School"
  );
});

it("Renders image ", () => {
  // Render App component
  render(<App />);

  // Fetch image by alt text
  const image = screen.getByAltText("holberton logo");

  // Assert alt text
  expect(image).toBeInTheDocument();
});
