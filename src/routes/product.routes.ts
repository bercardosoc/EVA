import { Router } from "express"
import { createProductController, deleteProductController, getProductsController } from "../controllers/product.controller"
import { authUser } from "../middlewares/authUser.middleware"

const routes = Router()

export const productRoutes = () => {

    routes.post("", authUser, createProductController)
    routes.get("", getProductsController)
    routes.delete("/:id", authUser, deleteProductController)

    return routes 
}