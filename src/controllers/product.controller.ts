import { Request, Response } from "express"
import productService from "../services/product.service"

class ProductsController {

    createProduct = async (req: Request, res: Response) => {

        console.log(req)
        const product = await productService.createProduct(req)
        return res.status(201).json(product)
    }
    
    getAll = async (_: Request, res: Response) => {

        const products = await productService.getAll()
        return res.status(200).json({ products })
    }

    deleteProduct = async (req: Request, res: Response) => {
        const productToDelete = await productService.deleteProduct(req)

        productToDelete === null ?
        res.status(404).json({"error": "Product not found"}) :
        res.status(200).json("Succefully deleted")
    }
}

export default new ProductsController()