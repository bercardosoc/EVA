import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { IUserCreate, IUserLogin } from "../interfaces/user";
import bcrypt from "bcrypt"
import { AppError } from "../errors/appError";
import jwt from "jsonwebtoken"

export const userCreateService = async ({ email, name, password }: IUserCreate) => {

    const userRepository = AppDataSource.getRepository(User)

    // Verificar se email existe, porém, usar um middleware
    const users = await userRepository.find()

    const emailAlreadyExists = users.find(user => user.email === email)

    if (emailAlreadyExists) {

        throw new AppError(409, "Email already exists")
    }
    
    const user = new User()
    user.name = name 
    user.email = email 
    user.password = bcrypt.hashSync(password, 12)

    userRepository.create(user)
    await userRepository.save(user)

    return user
}

export const userLoginService = async ({ email, password }: IUserLogin) => {
    
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()
    const account = users.find(user => user.email === email)

    if(!account) {
        throw new AppError(404, "Account not found")
    }

    const token = jwt.sign(
        { email: email },
        String(process.env.JTW_SECRET),
        { expiresIn: "1h" }
    )
    return token 
}