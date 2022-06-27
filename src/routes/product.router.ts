import { Router } from "express"
import productController from "../controllers/product.controller"
import { validateSchema } from "../middlewares/validateSchema.middleware"
import validateToken from "../middlewares/validateToken.middleware"
import { createdProductSchema } from "../schemas/product/createProduct.schema"
import { getProductsSchema } from "../schemas/product/listProducts.schema"

const routes = Router()

export const productsRoutes = () => {

    routes.post(
        "",
        validateToken,
        validateSchema(createdProductSchema),
        productController.createProduct
    )
    
    routes.get(
        "",
        validateSchema(getProductsSchema),
        productController.getAll
    )

    routes.delete(
        "/:id",
        productController.deleteProduct
    )
    
    return routes
}