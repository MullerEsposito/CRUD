import { Request, Response } from "express";
import { UpdateUserService } from "./UpdateUserService";

export class UpdateUserController {
  constructor(private updateUserService: UpdateUserService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const user = req.body;

    try {
      const updatedUser = await this.updateUserService.execute(user);

      return res.json(updatedUser);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}