import { Request } from "express"
import { Product } from "../entities/product.entity"
import { User } from "../entities/user.entity"
import categoryRepository from "../repositories/category.repository"
import productRepository from "../repositories/product.repository"
import { createdProductSchema, serializedProductSchema } from "../schemas/product/createProduct.schema"
import { getProductsSchema } from "../schemas/product/listProducts.schema"

class ProductsService {

    createProduct = async ({ validated, decoded, }: Request) => {
        
        const newProduct = validated as Product

        const category = await categoryRepository.findOne({
            name: newProduct.category,
        })

        newProduct.category = category
        newProduct.owner = decoded as User

        const product = await productRepository.save(newProduct)

        return await createdProductSchema.validate(product, {
            stripUnknown: true,
        })
    }

    getAll = async () => {
        const products = await productRepository.all()
        
        return await getProductsSchema.validate(products, {
            stripUnknown: true,
        })
    }

    deleteProduct = async ({ params }: Request) => {
        
        const product: Product | null = await productRepository.findOne({
            id: params.id,
        })
        if (product === null) return null

        await productRepository.delete(product.id)

        return true
    }
}

export default new ProductsService()