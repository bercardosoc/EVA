import * as yup from "yup"

export const getProductsSchema = yup.array().of(
    yup.object().shape({
        id: yup.string().uuid().required(),
        name: yup.string().required(),
        price: yup.number().required(),
        description: yup.string().required(),
        category: yup.object().shape({
            name: yup.string().required(),
          }),
        owner: yup.object().shape({
            name: yup.string().required(),
          }),
    })
)
.nullable()