import { Product } from "../../entities/product.entity"
import { User } from "../../entities/user.entity"

declare global {
    namespace Express {
        interface Request {
            validated: any
            decoded: any  
        }
    }
}