import * as yup from "yup"

export const createdProductSchema = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().required(),
    description: yup.string().required(),
})

export const serializedProductSchema = yup.object().shape({
    id: yup.string().uuid().required(),
    name: yup.string().required(),
    price: yup.number().required(),
    description: yup.string().required(),
    owner: yup.object().shape({
        name: yup.string().required(),
      }),
})
.nullable()