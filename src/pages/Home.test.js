import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockUsers } from "../mocks/mockUsers";
import store from "../redux/store/store";
import Home from "./Home";

const mockFunction = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => ({ contacts: mockUsers }),
}));

describe("Given the Home page component", () => {
  describe("When instantiated with an array of one trapper", () => {
    test("Then one image will be rendered", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </Provider>
      );

      screen.debug();

      const expectedImages = 1;
      const searchedImages = screen.getAllByRole("img");

      expect(searchedImages).toHaveLength(expectedImages);
    });
  });
});
