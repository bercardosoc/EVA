import * as yup from "yup"

export const createProductSchema = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().required(),
    description: yup.string().required(),
})

export const serializedProductSchema = yup.object().shape({
    id: yup.string().uuid().required(),
    name: yup.string().required(),
    price: yup.number().required(),
    description: yup.string().required(),
})
