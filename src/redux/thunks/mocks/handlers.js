import { rest } from "msw";
import { mockResponse } from "../../../mocks/mockUsers";

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}/users/register`,
    (req, res, ctx) =>
      res(
        ctx.status(201),
        ctx.json({
          user: { username: mockResponse.username, id: mockResponse.id },
        })
      )
  ),
];
