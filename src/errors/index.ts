import { Response } from "express";

type TMessage = string | Record<string, any>

export class ErrorHandler {
  public statusCode: number
  public message: TMessage

  constructor(statusCode: number, message: TMessage) {
    this.statusCode = statusCode
    this.message = message
  }
}

export const errorHandler = (err: Error, res: Response) => {
  if (err instanceof ErrorHandler) {
    return res.status(err.statusCode).json(err.message)
  }

  console.error(err)

  return res.status(500).json({ message: "Internal server error." })
}