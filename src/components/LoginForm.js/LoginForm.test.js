import { screen, render } from "@testing-library/react";
import App from "../../App";
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
    test("Then the component will be rendered, containing one header and one input fields", () => {
      render(<LoginForm />);

      const expectedHeaders = 1;
      const expectedInputFields = 1;

      const searchedHeader = screen.getAllByRole("heading");
      const searchedInputFields = screen.getAllByRole("textbox");

      expect(searchedHeader).toHaveLength(expectedHeaders);
      expect(searchedInputFields).toHaveLength(expectedInputFields);
    });
  });
});
