import { Router } from "express"
import userController from "../controllers/user.controller"

const routes = Router()

export const userRoutes = () => {
    
    routes.post("/signup", userController.createUser)
    routes.post("/signin", userController.loginUser)

    return routes
}