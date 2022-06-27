import * as yup from "yup";

export const createUserSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().lowercase().required(),
    password: yup.string().required(),
})

export const serializeUserSchema = yup.object().shape({
    id: yup.string().uuid().required(),
    name: yup.string().required(),
    email: yup.string().email().lowercase().required(),
    password: yup.string().required(),
})