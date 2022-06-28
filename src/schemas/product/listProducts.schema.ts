import * as yup from "yup"

export const getProductsSchema = yup.array().of(
    yup.object().shape({
        id: yup.string().uuid(),
        name: yup.string(),
        price: yup.number(),
        description: yup.string().required(),
    })
    .required()
)
.nullable()