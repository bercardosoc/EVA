import { Router } from "express";
import categoryController from "../controllers/category.controller";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import validateToken from "../middlewares/validateToken.middleware";
import { verifyCategoryExists } from "../middlewares/verifyCategoryExists.middleware";
import { createCategorySchema, editCategorySchema, serializedCategorySchema } from "../schemas/category/createCategory.schema";
import { getCategoriesSchema } from "../schemas/category/listCategories.schema";

const routes = Router()

export const categoriesRoutes = () => {

    routes.get(
        "",
        validateSchema(getCategoriesSchema),
        categoryController.getAll
        )

    routes.get(
        "/:name",
        categoryController.getCategory
    )

    routes.delete(
        "/:id",
        categoryController.deleteCategory
    )

    routes.patch(
        "/:id",
        validateSchema(editCategorySchema),
        verifyCategoryExists,
        categoryController.updateCategory
    )

    routes.post(
        "",
        validateToken,
        validateSchema(createCategorySchema),
        verifyCategoryExists,
        categoryController.createCategory
    )

    return routes
}