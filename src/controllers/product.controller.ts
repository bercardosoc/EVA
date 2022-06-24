import { Request, Response } from "express"
import { AppError, handleError } from "../errors/appError"
import { createProductService, getProductsService } from "../services/product.service"

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