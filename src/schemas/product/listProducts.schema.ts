import * as yup from "yup"

export const getProductsSchema = yup.array().of(
    yup.object().shape({
        id: yup.string().uuid().required(),
        name: yup.string().required(),
        price: yup.string().required(),
        description: yup.string().required(),
    })
)
.nullable()