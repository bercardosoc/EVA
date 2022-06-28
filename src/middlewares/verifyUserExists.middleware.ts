import { NextFunction, Request, Response } from "express";
import { User } from "../entities/user.entity";
import { ErrorHandler } from "../errors/errors";
import userRepository from "../repositories/user.repository";

export const verifyUserExists = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const foundUser: User | null = await userRepository.findOne({
      email: (req.validated as User).email,
    });
  
    if (foundUser) {
      throw new ErrorHandler(409, `${(req.validated as User).email} already exists`)
    }
  
    return next();
  };