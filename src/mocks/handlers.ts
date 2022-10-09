import { rest } from 'msw';

type RequestUser = {
  body: {
    username: string;
    password: string;
  };
};

const validUser = {
  username: 'admin',
  password: 'admin123',
};

const dummyJWTToken = 'f23hg1ghg5hjbg1gjh68fghf';

export const handlers = [
  rest.post('/', (req: RequestUser, res, ctx) => {
    const check =
      validUser.password === req.body.password &&
      validUser.username === req.body.username;

    if (!check) {
      return res(
        ctx.status(400),
        ctx.json({
          message: 'Bad Credentials',
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        id: 123,
        accessToken: dummyJWTToken,
        username: req.body.username,
      })
    );
  }),
];
