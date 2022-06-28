import { Router } from "express";
import categoryController from "../controllers/category.controller";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import validateToken from "../middlewares/validateToken.middleware";
import { verifyCategoryExists } from "../middlewares/verifyCategoryExists.middleware";
import { createCategorySchema, serializedCategorySchema } from "../schemas/category/createCategory.schema";
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
        "/:categoryId",
        categoryController.deleteCategory
    )

    routes.patch(
        "/:categoryId",
        validateSchema(createCategorySchema),
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