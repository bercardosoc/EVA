import { Express } from "express";
import { userRoutes } from "./user.router";

const registerRouters = (app: Express): void => {
    app.use("/users", userRoutes())
}
  
export default registerRouters;


