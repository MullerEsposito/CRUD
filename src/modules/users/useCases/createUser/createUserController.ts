import { Request, Response } from "express";
import { CreateUserService } from "./createUserService";

export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const user = req.body;
    
    try {
      const createdUser = await this.createUserService.execute(user);

      return res.status(201).json(createdUser);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}