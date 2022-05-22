import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

const mockFunction = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockFunction,
}));

describe("Given the Header component", () => {
  describe("When instantiated", () => {
    test("Then the component will be rendered, containing two paragraphs and a header", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      const expectedHeaders = 1;
      const expectedLinks = 3;

      const searchedHeader = screen.getAllByRole("heading");
      const searchedLinks = screen.getAllByRole("link");

      expect(searchedHeader).toHaveLength(expectedHeaders);
      expect(searchedLinks).toHaveLength(expectedLinks);
    });
  });

  describe("When the logout button is clicked", () => {
    test("Then the logout action will be dispatched", () => {
      global.Storage.prototype.getItem =
        mockFunction.mockReturnValue("Valid token");
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      const searchedButton = screen.getByText("Logout");

      userEvent.click(searchedButton);

      expect(mockFunction).toHaveBeenCalled();
    });
  });
});
