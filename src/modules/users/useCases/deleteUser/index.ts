import { UsersRepositoryPG } from "../../repositories/postgres/UsersRepositoryPG";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserService } from "./DeleteUserService";

export function getDeleteUserController(): DeleteUserController {
  const usersRepository = new UsersRepositoryPG();

  const deleteUserService = new DeleteUserService(usersRepository);

  const deleteUserController = new DeleteUserController(deleteUserService);

  return deleteUserController;
}