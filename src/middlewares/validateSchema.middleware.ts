import { Request, Response, NextFunction } from "express"
import { AnySchema } from "yup"
import { ErrorHandler } from "../errors"

export const validateSchemaMiddleware = (shape: AnySchema) => 
  
async (request: Request, _: Response, next: NextFunction) => {

    try {

      const validated = await shape.validate(request.body, {
        abortEarly: false,
        stripUnknown: true,
      })

      request.validated = validated

      return next()
    
    } catch (error) {
      
        throw new ErrorHandler(400, { error: error.errors })
    
    }
  }
