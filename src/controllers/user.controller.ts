import { Request, response, Response } from "express"
import userService from "../services/user.service"

class UserController {

    createUser = async (request: Request, response: Response) => {
        
        const user = await userService.createUser(request)
        return response.status(201).json(user)
    }

    loginUser = async (request: Request, response: Response) => {
        
        try {
            const { status, message } = await userService.loginUser(request)
            return response.status(status).json(message)
        
        } catch (err) {
            return response.status(err.statusCode).json(err.message)
        }
    }
}

export default new UserController()