import { screen, render } from "@testing-library/react";
import App from "../../App";
import RegisterForm from "./RegisterForm";

describe("Given the RegisterForm component", () => {
  describe("When instantiated", () => {
    test("Then the component will be rendered, containing one header and three input fields", () => {
      render(
        <App>
          <RegisterForm />
        </App>
      );

      const expectedHeaders = 1;
      const expectedInputFields = 3;

      const searchedHeader = screen.getAllByRole("heading");
      const searchedInputFields = screen.getAllByRole("textbox");

      expect(searchedHeader).toHaveLength(expectedHeaders);
      expect(searchedInputFields).toHaveLength(expectedInputFields);
    });
  });
});
