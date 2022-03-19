import { rest } from "msw";

export const handlers = [
  rest.get(
    `${process.env.REACT_APP_API_MINDFULNESS}allsessions`,
    (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json({
          sessions: [
            {
              title: "hello",
              comment: "hola",
              date: "today",
            },
            {
              title: "bye",
              comment: "adios",
              date: "today",
            },
          ],
        })
      )
  ),
  rest.delete(
    `${process.env.REACT_APP_API_MINDFULNESS}delete/6233212de3b7b5bc827f58de`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({}));
    }
  ),
  rest.delete(
    `${process.env.REACT_APP_API_MINDFULNESS}delete/622faa6`,
    (req, res, ctx) => {
      return res(ctx.status(404));
    }
  ),
  rest.post(
    `${process.env.REACT_APP_API_MINDFULNESS}create`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          session: {
            title: "hello",
            comment: "hola",
            date: "today",
            iFrame: "ejemplo",
          },
        })
      );
    }
  ),
];
