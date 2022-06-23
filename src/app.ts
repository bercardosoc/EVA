import express, { Request, Response } from "express"
import { errorMiddleware } from "./middlewares/error.middleware"
import { appRoutes } from "./routes"

const app = express()

app.use(express.json())

appRoutes(app)

app.use(errorMiddleware)

app.listen(3000)