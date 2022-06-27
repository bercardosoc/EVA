import * as yup from "yup"

export const createCategorySchema = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().required(),
    description: yup.string().required(),
})

export const serializedCategorySchema = yup.object().shape({
    id: yup.string().uuid().required(),
    name: yup.string().required(),
    price: yup.string().required(),
    description: yup.string().required(),
})
.nullable()