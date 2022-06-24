import { Router } from "express"
import { userCreateController, userLoginController } from "../controllers/user.controller"

const routes = Router()

export const userRoutes = () => {
    
    routes.post("/signup", userCreateController)
    routes.post("/signin", userLoginController)

    return routes
}