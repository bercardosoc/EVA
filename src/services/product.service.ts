import productRepository from "../repositories/product.repository"
import { getProductsSchema } from "../schemas/product/listProducts.schema"

class ProductsService {
    getAll = async () => {
        const categories = await productRepository.all()
        
        return await getProductsSchema.validate(categories, {
            stripUnknown: true,
        })
    }
}

export default new ProductsService()