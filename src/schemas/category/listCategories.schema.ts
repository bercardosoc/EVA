import * as yup from "yup"

export const getCategoriesSchema = yup.array().of(
    yup.object().shape({
        categoryId: yup.string().uuid().required(),
        name: yup.string().required(),
        description: yup.string().required(),
    })
)
.nullable()