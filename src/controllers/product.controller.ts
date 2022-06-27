import { Request, Response } from "express"
import productRepository from "../repositories/product.repository"
import { getProductsSchema } from "../schemas/product/listProducts.schema"
import productService from "../services/product.service"

class ProductsController {
    
    getAll = async (_: Request, res: Response) => {
        const categories = await productService.getAll()
        return res.status(200).json({ categories })
    }
}

export default new ProductsController()