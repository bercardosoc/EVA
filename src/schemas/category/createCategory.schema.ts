import * as yup from "yup"

export const createCategorySchema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
})

export const editCategorySchema = yup.object().shape({
    name: yup.string(),
    description: yup.string(),
})

export const serializedCategorySchema = yup.object().shape({
    categoryId: yup.string().uuid().required(),
    name: yup.string().required(),
    description: yup.string().required(),

    products: yup.array().of(
        yup.object().shape({
            name: yup.string(),
            price: yup.number(),
            description: yup.string(),
        })
    ),
})
.nullable()
