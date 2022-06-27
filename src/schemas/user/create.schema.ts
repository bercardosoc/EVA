import * as yup from "yup";
import { hashSync } from "bcrypt";

export const createUserSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().lowercase().required(),
  password: yup
    .string()
    .transform((pwd: string) => hashSync(pwd, 8))
    .required(),
})

export const serializedCreateUserSchema = yup.object().shape({
    id: yup.string().uuid().required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
  })