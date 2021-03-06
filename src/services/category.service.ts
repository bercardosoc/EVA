import { Request } from "express"
import { Category } from "../entities/category.entity"
import { User } from "../entities/user.entity"
import categoryRepository from "../repositories/category.repository"
import { createCategorySchema, serializedCategorySchema } from "../schemas/category/createCategory.schema"
import { getCategoriesSchema } from "../schemas/category/listCategories.schema"

class CategoriesService {

    createCategory = async ({ validated, decoded }: Request) => {
        
        const newCategory = validated as Category
        newCategory.owner = decoded as User

        const product = await categoryRepository.save(newCategory)

        return await serializedCategorySchema.validate(product, {
            stripUnknown: true,
        })
    }

    getCategory = async ({ params }: Request) => {
        
        const category: Category | null = await categoryRepository.findOne({
            name: params.name,
        })

        return await serializedCategorySchema.validate(category, {
            stripUnknown: true
        })   
    }

    getAll = async () => {
        const categories = await categoryRepository.all()
        
        return categories 
        return await getCategoriesSchema.validate(categories, {
            stripUnknown: true,
        })
    }

    updateCategory = async ({ params, body }: Request) => {
        
        await categoryRepository.update(params.id, {...body})
        
        const categoryToUpdate: Category | null = await categoryRepository.findOne({
            categoryId: params.id,
        })
        
        return await serializedCategorySchema.validate(categoryToUpdate, {
            stripUnknown: true,
        })
    }

    deleteCategory = async ({ params }: Request) => {
        
        const category: Category | null = await categoryRepository.findOne({
            categoryId: params.id,
        })

        if (category === null) return null

        await categoryRepository.delete(category.categoryId)

        return true 
    }
}

export default new CategoriesService()