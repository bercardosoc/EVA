import { Express } from "express";
import { categoriesRoutes } from "./category.router";
import { productsRoutes } from "./product.router";
import { userRoutes } from "./user.router";

const registerRouters = (app: Express): void => {
    app.use("/users", userRoutes())
    app.use("/products", productsRoutes())
    app.use("/categories", categoriesRoutes())
}
  
export default registerRouters;


