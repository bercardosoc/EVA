import { Router } from "express"
import { createProductController, getProductsController } from "../controllers/product.controller"

const routes = Router()

export const productRoutes = () => {

    routes.post("", createProductController)
    routes.get("", getProductsController)

    return routes 
}