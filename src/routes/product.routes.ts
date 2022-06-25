import { Router } from "express"
import { createProductController, deleteProductController, getProductsController } from "../controllers/product.controller"

const routes = Router()

export const productRoutes = () => {

    routes.post("", createProductController)
    routes.get("", getProductsController)
    routes.delete("/:id", deleteProductController)

    return routes 
}