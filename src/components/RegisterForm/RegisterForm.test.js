import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";
import RegisterForm from "./RegisterForm";

const mockFunction = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockFunction,
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: (initial) => [initial, mockFunction],
}));

describe("Given the RegisterForm component", () => {
  describe("When instantiated", () => {
    test("Then the component will be rendered, containing one header and three input fields", () => {
      render(<RegisterForm />);

      const expectedHeaders = 1;
      const expectedInputFields = 2;

      const searchedHeader = screen.getAllByRole("heading");
      const searchedInputFields = screen.getAllByRole("textbox");

      expect(searchedHeader).toHaveLength(expectedHeaders);
      expect(searchedInputFields).toHaveLength(expectedInputFields);
    });
  });
  describe("When the reset button is clicked", () => {
    test("Then the reset event function will be dispatched", () => {
      render(<RegisterForm />);

      const inputField = screen.getAllByRole("textbox")[0];
      inputField.textContent = "Hello";
      const resetButton = screen.getAllByRole("button")[1];
      userEvent.click(resetButton);

      expect(mockFunction).toHaveBeenCalled();
    });
  });
  describe("When the submit button is clicked", () => {
    test("Then the submit form function will be dispatched", () => {
      render(<RegisterForm />);

      const inputField = screen.getAllByRole("textbox")[0];
      inputField.textContent = "Hello";
      const submitButton = screen.getAllByRole("button")[0];
      userEvent.click(submitButton);

      expect(mockFunction).toHaveBeenCalled();
    });
  });
});
