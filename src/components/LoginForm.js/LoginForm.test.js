import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

const mockFunction = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockFunction,
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: (initial) => [initial, mockFunction],
}));

describe("Given the LoginForm component", () => {
  describe("When instantiated", () => {
    test("Then the component will be rendered, containing one header and one text input fields", () => {
      render(<LoginForm />);

      const expectedHeaders = 1;
      const expectedInputFields = 1;

      const searchedHeader = screen.getAllByRole("heading");
      const searchedInputFields = screen.getAllByRole("textbox");

      expect(searchedHeader).toHaveLength(expectedHeaders);
      expect(searchedInputFields).toHaveLength(expectedInputFields);
    });
  });
  describe("When the submit button is clicked", () => {
    test("Then the submit action will be dispatched", () => {
      render(<LoginForm />);

      const searchedButton = screen.getAllByRole("button")[0];
      userEvent.click(searchedButton);

      expect(mockFunction).toHaveBeenCalled();
    });
  });

  describe("When the reset button is clicked", () => {
    test("Then the reset action will be dispatched", () => {
      render(<LoginForm />);

      const searchedButton = screen.getAllByRole("button")[1];
      userEvent.click(searchedButton);

      expect(mockFunction).toHaveBeenCalled();
    });
  });
});
