import * as dotenv from "dotenv";
import { Request } from "express";
import { User } from "../entities/user.entity";
import userRepository from "../repositories/user.repository";
import jwt from "jsonwebtoken";
import { serializedCreateUserSchema } from "../schemas/user/create.schema";
import { AssertsShape } from "yup/lib/object";

dotenv.config();

interface ILogin {
  status: number;
  message: object;
}

class UserService {

  login = async ({ validated }: Request): Promise<ILogin> => {

    const user: User | null = await userRepository.retrieve({
      email: (validated as User).email,
    });

    if (!user) {
      return {
        status: 401,
        message: { message: "Invalid credentials" },
      };
    }
    if (!(await user.comparePwd((validated as User).password))) {
      return {
        status: 401,
        message: { message: "Invalid credentials" },
      };
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY as string, {
      expiresIn: process.env.EXPIRES_IN,
    });

    return {
      status: 200,
      message: { token },
    };
}

  create = async ({ validated }: Request): Promise<AssertsShape<any>> => {

    const user = await userRepository.save(validated as User);
    const createdUser = await userRepository.retrieve({ id: user.id });
    return await serializedCreateUserSchema.validate(createdUser, {
      stripUnknown: true,
    })
}
}

export default new UserService();
