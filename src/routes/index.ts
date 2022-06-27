import { Express } from "express";
import { productsRoutes } from "./product.routes";
import { userRoutes } from "./user.router";

const registerRouters = (app: Express): void => {
    app.use("/users", userRoutes())
    app.use("/products", productsRoutes())
}
  
export default registerRouters;


