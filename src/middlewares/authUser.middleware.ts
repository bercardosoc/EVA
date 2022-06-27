import { NextFunction, Request, Response } from "express";
import { AppError, handleError } from "../errors/appError";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";

dotenv.config()

export const authUser = (request: Request, response: Response, next: NextFunction) => {

    try {

        const token = request.headers.authorization?.split(" ")[1]
        
        if (!token) {
            throw new AppError(401, "Não encontramos o token")
        }
        
        jwt.verify(token as string, process.env.SECRET_KEY as string, (err: any, decoded: any) => {

            if(err) {
                throw new AppError(401, "Token inválido")
            }
            next()
        })

    } catch(err) {
        if (err instanceof AppError) {
            handleError(err, response)
        }
    }
}