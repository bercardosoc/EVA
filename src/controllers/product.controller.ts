import { Request, Response } from "express"
import { AppError, handleError } from "../errors/appError"
import { createProductService, deleteProductService, getProductsService } from "../services/product.service"
import jwt from "jsonwebtoken"
import 'dotenv/config' 

export const createProductController = async (request: Request, response: Response) => {

    try {

        const data = request.body    
        const product: any /* tipar aqui */ = await createProductService(data)
        return response.status(201).json(product)

    } catch (err) {

        if (err instanceof AppError) {
            handleError(err, response)
        }
    }
}

export const getProductsController = async (request: Request, response: Response) => {

    const productList: any /* tipar aqui */ = await getProductsService()
    return response.json(productList)
}

export const deleteProductController = async (request: Request, response: Response) => {
    
    const productToDelete = await deleteProductService(request)

    productToDelete === null ? 
    response.status(404).json({ "error": "Product not found" }) :
    response.status(200).json("Sucessfully deleted")
}