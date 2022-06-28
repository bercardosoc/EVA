import { NextFunction, Request, Response } from "express";
import { Category } from "../entities/category.entity";
import { ErrorHandler } from "../errors/errors";
import categoryRepository from "../repositories/category.repository";

export const verifyCategoryExists = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const foundCategory: Category | null = await categoryRepository.findOne({
      name: (req.validated as Category).name,
    });
  
    if (foundCategory) {
      throw new ErrorHandler(409, `${(req.validated as Category).name} already exists`)
    }
  
    return next();
  };
  