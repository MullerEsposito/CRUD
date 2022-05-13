import { Request, Response } from "express";
import { ListUsersService } from "./ListUsersService";

export class ListUsersController {
  constructor(private listUsersService: ListUsersService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.listUsersService.execute();

      return res.json(users);
    } catch (error) {
      return res.status(400).send();
    }
  }
}