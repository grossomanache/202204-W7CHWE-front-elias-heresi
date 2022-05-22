import { rest } from "msw";
import { mockResponse, mockUsers } from "../../../mocks/mockUsers";

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

  rest.get(`${process.env.REACT_APP_API_URL}/users/list`),
  (req, res, ctx) => res(ctx.status(200), ctx.json(mockUsers)),
];
