import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import registerRouters from "./routes";
import { errorHandler } from "./errors/errors";

const app = express();

app.use(express.json());
registerRouters(app);

app.use((err: Error, _: Request, res: Response, __: NextFunction) => {
  return errorHandler(err, res);
});

export default app;
