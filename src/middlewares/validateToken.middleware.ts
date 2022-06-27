import { NextFunction, Request, Response } from "express";
import { JwtPayload, sign, verify, VerifyErrors } from "jsonwebtoken";
import * as dotenv from "dotenv";
import { ErrorHandler } from "../errors";
import { User } from "../entities/user.entity";

dotenv.config()

export const validateToken = async ( request: Request, response: Response, next: NextFunction ) => {
  
  const token: string | null = request.headers.authorization?.split(" ")[1]

  let jwtPayload

  const secret: string = process.env.JWT_SECRET || ""

  if (token) {
    try {

      jwtPayload = <any>verify(token, secret)
      response.locals.jwtPayload = jwtPayload
      response.locals.user = response.locals.jwtPayload.data
    
    }
    catch(err) {
      throw new ErrorHandler(401, err.message)
    }

    const { id, email } = jwtPayload
    const newToken = sign({ id, email }, secret, {
      expiresIn: "1h",
      algorithm: "HS256"
    })
    response.setHeader("token", newToken)
    next()
  }
  else {
    throw new ErrorHandler(401, "Alguma coisa deu muito errado")
  }

  // return verify ( token, process.env.SECRET_KEY, (err: VerifyErrors, decoded: string | JwtPayload) => {
}