import { Router } from "express"
import userController from "../controllers/user.controller"
import { validateSchema } from "../middlewares/validateSchema.middleware"
import { verifyUserExists } from "../middlewares/verifyUserExists.middleware"
import { createUserSchema } from "../schemas/user/create.schema"
import { loginUserSchema } from "../schemas/user/login.schema"

const routes = Router()

export const userRoutes = () => {
    
    routes.post(
        "/signup", 
        validateSchema(createUserSchema), 
        verifyUserExists, 
        userController.createUser
        )

    routes.post(
        "/signin", 
        validateSchema(loginUserSchema), 
        userController.loginUser
        )

    return routes
}