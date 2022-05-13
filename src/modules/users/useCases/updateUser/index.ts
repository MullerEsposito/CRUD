import { UsersRepositoryPG } from "../../repositories/postgres/UsersRepositoryPG";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserService } from "./UpdateUserService";

export function getUpdateUserController(): UpdateUserController {
  const usersRepository = new UsersRepositoryPG;

  const updateUserService = new UpdateUserService(usersRepository);

  const updateUserController = new UpdateUserController(updateUserService);

  return updateUserController;
}