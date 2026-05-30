import type { NextApiRequest, NextApiResponse } from 'next';

type NextFn = (result?: unknown) => void;

type Middleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextFn
) => unknown | Promise<unknown>;

const initMiddleware = (middleware: Middleware) => {
  return (req: NextApiRequest, res: NextApiResponse): Promise<unknown> =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) =>
        result instanceof Error ? reject(result) : resolve(result)
      );
    });
};

export default initMiddleware;
