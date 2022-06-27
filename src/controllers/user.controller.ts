import express, {Request, Response} from 'express';
import userService from "../services/user.service";

class UserController {

    loginUser = async (req: Request, res: Response) => {

      const { status, message } = await userService.login(req);
      return res.status(status).json(message);
    
    }
  
    createUser = async (req: Request, res: Response) => {

      const user = await userService.create(req);
      return res.status(201).json(user);
    
    }
}

export default new UserController();
