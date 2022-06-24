import { Request } from "express"
import { AppDataSource } from "../data-source"
import { Product } from "../entities/product.entity"
import { User } from "../entities/user.entity"
import { AppError } from "../errors/appError"


export const createProductService = async ({ name, description, price }: any /* tipar aqui */) => {

    const productRepository = AppDataSource.getRepository(Product)
    // const imageRepository = AppDataSource.getRepository(Image)
    
    const productAlreadyExists = await productRepository.findOne({ where: { name }})

    if (productAlreadyExists) {
        throw new AppError(409, "Product already registered")
    }

    /* Criar lógica de adição de imagem */

    const userRepository = AppDataSource.getRepository(User)
    const user: any = await userRepository.findOne({
        where: { id: "34f740db-2ad5-4b67-bd44-0ddf1667a4d0" }
        /* Mudar para o id que bem do token */
    }) 

    const product = new Product()
    product.name = name 
    product.description = description
    product.price = price 
    product.owner = user 


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
