import { Request, Response } from "express";
import { DeleteUserService } from "./DeleteUserService";

export class DeleteUserController {
  constructor(private deleteUserService: DeleteUserService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.params;

    try {
      await this.deleteUserService.execute(userId);

      return res.status(204).send();
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}