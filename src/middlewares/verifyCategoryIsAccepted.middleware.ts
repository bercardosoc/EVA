import { NextFunction, Request, Response } from "express";
import { Category } from "../entities/category.entity";
import { Product } from "../entities/product.entity";
import { ErrorHandler } from "../errors/errors";
import categoryRepository from "../repositories/category.repository";

export const verifyCategoryIsAcceptedMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (!req.body.category) {
      return next();
    }
  
    if (req.validated) {
      const category: Category | null = await categoryRepository.findOne({
        name: (req.validated as Product).category,
      });
  
      if (!category) {
        throw new ErrorHandler(400, `${req.body.category} não existe na database`);
      }
  
      return next();
    }
  
    const category: Category | null = await categoryRepository.findOne({
      name: req.body.category,
    });
  
    if (!category) {
      throw new ErrorHandler(400, `A categoria ${req.body.category} não existe`);
    }
  
    return next();
  };