import { mockRegistry } from "../../mocks/mockUsers";
import { server } from "./mocks/server";
import { registerUserThunk } from "./thunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given the registerUserThunk", () => {
  describe("When instantiated", () => {
    test("Then the dispatch will be called, returning a 201 status", async () => {
      const thunk = registerUserThunk(mockRegistry);
      const dispatch = jest.fn().mockReturnValue(201);
      await dispatch(thunk);
      expect(dispatch).toHaveReturnedWith(201);
    });
  });
});
