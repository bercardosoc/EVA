import * as yup from "yup"

export const listProductsSchema = yup.array().of(
    yup.object().shape({
        id: yup.string().uuid().required(),
        name: yup.string().required(),
        price: yup.number().required(),
        description: yup.string().required(),
    })
)