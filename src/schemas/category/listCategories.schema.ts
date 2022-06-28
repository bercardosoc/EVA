import * as yup from "yup"

export const getCategoriesSchema = yup.array().of(
    yup.object().shape({
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
)
.nullable()