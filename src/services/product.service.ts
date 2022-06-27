import { Request } from "express"
import { Product } from "../entities/product.entity"
import productRepository from "../repositories/product.repository"
import { createProductSchema } from "../schemas/product/createProduct.schema"
import { listProductsSchema } from "../schemas/product/listProducts.schema"

class ProductsService {

    createProduct = async () => {
        
        /* const product: Product = await productRepository.save({
            ...(validated as Product)
        })
        return await createProductSchema.validate(product, {
            stripUnknown: true,
        }) */
    }

    listProducts = async () => {
        
        const products = await productRepository.all()

        return await listProductsSchema.validate(products, {
            stripUnknown: true,
        })
    }

    deleteProduct = async ({ params }: Request) => {

        const product: Product | null = await productRepository.findOne({
            id: params.id
        })

        if (product === null) return null 

        await productRepository.delete(product.id)

        return true 
    }
}

export default new ProductsService()