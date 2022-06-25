import { Request } from "express"
import { AppDataSource } from "../data-source"
import { Product } from "../entities/product.entity"
import { User } from "../entities/user.entity"
import { AppError } from "../errors/appError"
import { IProductCreate } from "../interfaces/product"

export const createProductService = async ({ name, description, price }: IProductCreate, token: any) => {

    const productRepository = AppDataSource.getRepository(Product)
    
    const productAlreadyExists = await productRepository.findOne({ where: { name }})

    if (productAlreadyExists) {
        throw new AppError(409, "Product already registered")
    }

    const userRepository = AppDataSource.getRepository(User)
    const user: User | null = await userRepository.findOne({
        where: { id: token.id }
    }) 

    const product = new Product()
    product.name = name 
    product.description = description
    product.price = price
    if (user !== null) product.owner = user 

    productRepository.create(product)
    await productRepository.save(product)

    return product

}

export const getProductsService = async () => {

    const productRepository = AppDataSource.getRepository(Product)
    const productList = await productRepository.find()
    return productList

}

export const deleteProductService = async ({ params }: Request) => {
    
    const productRepository = AppDataSource.getRepository(Product)
    
    const product = await productRepository.findOne({ where: { id: params.id }})

    if (product === null) return null

    await productRepository.delete(product.id)

    return true 
}
