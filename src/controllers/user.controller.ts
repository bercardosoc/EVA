import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";
import { userCreateService, userLoginService } from "../services/user.service";

export const userCreateController = async (request: Request, response: Response) => {
    
    try {

        const { name, email, password } = request.body
        const createdUser = await userCreateService({ name, email, password })
        return response.status(201).send(createdUser)
    
    } catch (err) {
    
        if (err instanceof AppError) {
            handleError(err, response)
        }
    }
}

export const userLoginController = async (request: Request, response: Response) => {
    
    try {

        const { email, password } = request.body
        const token = await userLoginService({ email, password })
        return response.status(201).json({ token })
    
    } catch (err) {
    
        if (err instanceof AppError) {
            handleError(err, response)
        }
    }
}