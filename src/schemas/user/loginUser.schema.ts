import * as yup from "yup";

export const loginUserSchema = yup.object().shape({
    email: yup.string().email().lowercase().required(),
    password: yup.string().required(),
})