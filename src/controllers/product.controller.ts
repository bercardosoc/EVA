import { Request, response, Response } from "express"
import productService from "../services/product.service"

class ProductController {

    createProduct = async (request: Request, response: Response) => {
        
        const product = await productService.createProduct()
        return response.status(201).json(product)
    
    }

    listProducts = async (_: Request, response: Response) => {

        const products = await productService.listProducts()
        return response.status(200).json({ products })
    }

    deleteProduct = async (request: Request) => {

        const productToDelete = await productService.deleteProduct(request)

        productToDelete === null ?
        response.status(404).json({"error": "Product not found"}) :
        response.status(200).json("Succefully deleted")
        
    }
}

export default new ProductController()