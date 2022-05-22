import { render, screen } from "@testing-library/react";
import { mockUsers } from "../../mocks/mockUsers";
import Contact from "./Contact";

describe("Given the Contact component", () => {
  describe("When instantiated with an object containing Jhay Cortez as a parameter", () => {
    test("Then two headers and an image will be rendered", () => {
      render(<Contact contact={mockUsers[0]} />);

      const expectedHeaders = 2;
      const expectedImages = 1;

      const searchedImages = screen.getAllByRole("img");
      const searchedHeaders = screen.getAllByRole("heading");

      expect(searchedHeaders).toHaveLength(expectedHeaders);
      expect(searchedImages).toHaveLength(expectedImages);
    });
  });
});
