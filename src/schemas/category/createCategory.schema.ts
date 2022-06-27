import * as yup from "yup"

export const createCategorySchema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
})

export const serializedCategorySchema = yup.object().shape({
    categoryId: yup.string().uuid().required(),
    name: yup.string().required(),
    unit: yup.string().required(),
    description: yup.string().required(),
})
.nullable()
