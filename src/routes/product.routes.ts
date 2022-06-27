import { Router } from "express"
import productController from "../controllers/product.controller"
import { validateSchema } from "../middlewares/validateSchema.middleware"
import validateToken from "../middlewares/validateToken.middleware"
import { getProductsSchema } from "../schemas/product/listProducts.schema"

const routes = Router()

export const productsRoutes = () => {
    
    routes.get(
        "",
        validateSchema(getProductsSchema),
        validateToken,
        productController.getAll
        )
    
    return routes
}