import { Product } from "../../src/entities/product.entity"
import { User } from "../../src/entities/user.entity"
import { Request } from "express"

declare global {
    namespace Express {
        interface Request {
            validated: User | Product
            decoded: Partial<User>
            user: User
        }
    }
}