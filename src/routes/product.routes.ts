import { Router } from "express"
import productController from "../controllers/product.controller"
import { validateToken } from "../middlewares/validateToken.middleware"

const routes = Router()

export const productRoutes = () => {

    routes.post("", /* validateToken, */ productController.createProduct)
    routes.get("", productController.listProducts)
    routes.delete("/:id", validateToken, productController.deleteProduct)

    return routes 
}