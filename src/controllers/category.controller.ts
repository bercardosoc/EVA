import { Request, Response } from "express"
import categoryService from "../services/category.service"

class CategoriesController {

    createCategory = async (req: Request, res: Response) => {
        const category = await categoryService.createCategory(req)

        return res.status(201).json(category)
    }

    getCategory = async (req: Request, res: Response) => {
        const chosenCategory = await categoryService.getCategory(req)

        chosenCategory === null ?
        res.status(404).json({"error": "Categoria não encontrada"}) : 
        res.status(201).json( chosenCategory )
    }

    getAll = async (_: Request, res: Response) => {
        const categories = await categoryService.getAll()

        return res.status(200).json({ categories })
    }

    updateCategory = async (req: Request, res: Response) => {
        const categoryToUpdate = await categoryService.updateCategory(req)

        categoryToUpdate === null ? 
        res.status(404).json({"error": "Categoria não encontrada"}) :
        res.status(200).json(categoryToUpdate)
    }

    deleteCategory = async (req: Request, res: Response) => {
        const categoryToDelete = await categoryService.deleteCategory(req)

        categoryToDelete === null ?
        res.status(404).json({"error": "Categoria não encontrada"}) :
        res.status(200).json("Succefully deleted")
    }
}

export default new CategoriesController()