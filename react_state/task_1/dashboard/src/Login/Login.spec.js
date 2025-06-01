import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

let container = null;

describe("Login Component", () => {
  beforeEach(() => {
    const rendered = render(<Login />);
    container = rendered.container;
  });

  // Test if Login paragraph has correct text
  it.skip("Login has correct text", () => {
    const loginText = screen.getByText(/Login to access the full dashboard/i);

    expect(loginText).toBeInTheDocument();
  });

  // Test if Login renders two input elements, two labels and button
  it.skip("renders two input elements, two labels and button", () => {
    //Get input elements
    const inputElements = container.querySelectorAll("input");
    const inputLength = inputElements.length;

    // Get labels
    const labelElements = container.querySelectorAll("label");
    const labelsLength = labelElements.length;

    //Get button
    const button = screen.getByRole("button");

    // Assert number of input elements
    expect(inputLength).toEqual(2);

    // Assert number of label elements
    expect(labelsLength).toEqual(2);

    // Assert existance of button
    expect(button).toBeInTheDocument();
  });

  //Test if labels have correct values
  it("Labels have correct values", () => {
    const email = screen.getByLabelText(/Email/i);
    const password = screen.getByLabelText(/Password/i);

    // Assert label values
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  //Test if button has correct value
  it.skip("Button has correct value", () => {
    //Get button
    const button = screen.getByRole("textbox");

    // Assert if button has correct value
    expect(button.value).toEqual("OK");
  });

  // Test if click on label triggeres focus on input element
  it("On label click triggers focus", async () => {
    // Get email related elements
    const emailLabel = screen.getByLabelText(/Email/i);
    const inputField = screen.getByRole("textbox", { name: /email/i });

    // Simulate click on label
    await userEvent.click(emailLabel);

    // Assert if input gets focused
    expect(inputField).toHaveFocus();
  });

  // Test if Submit button is disabled by default
  it("Submit button is disabled", () => {
    
    // Get submit input element
    const submitButton = screen.queryByTestId("submitBtn");
    
    expect(submitButton).not.toBeInTheDocument();
  })

  // Test that Submit button is enabled when form meets criteria
  it("Submit button is enabled", async () => {

    const emailInput = screen.getByLabelText(/email/i);
    await userEvent.type(emailInput, "hello@example.com");

    const passwordInput = screen.getByLabelText(/password/i);
    await userEvent.type(passwordInput, "12345678");
    
    // Get submit input element
    const submitButton = screen.queryByTestId("submitBtn");
    expect(submitButton).toBeInTheDocument();
  })
});
