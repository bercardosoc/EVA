import { Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { Image } from "../entities/image.entity"
import { Product } from "../entities/product.entity"
import { AppError } from "../errors/appError"

export const createProductService = async ({ name, description, price }: any /* tipar aqui */) => {

    const productRepository = AppDataSource.getRepository(Product)
    const imageRepository = AppDataSource.getRepository(Image)
    
    const productAlreadyExists = await productRepository.findOne({ where: { name }})

    if (productAlreadyExists) {
        throw new AppError(409, "Product already registered")
    }

    /* Criar lógica de adição de imagem */


    const product = new Product()
    product.name = name 
    product.description = description
    product.price = price 

    productRepository.create(product)
    await productRepository.save(product)

    return product

}

export const getProductsService = async () => {

    const productRepository = AppDataSource.getRepository(Product)
    const productList = await productRepository.find()
    return productList

}