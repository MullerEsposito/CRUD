import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { UsersRepositoryPG } from "../../repositories/postgres/UsersRepositoryPG";
import { ListUsersController } from "./ListUsersController";
import { ListUsersService } from "./ListUsersService";

export function getListUsersController(): ListUsersController {
  const usersRepository = new UsersRepositoryPG();

  const listUsersService = new ListUsersService(usersRepository);

  const listUsersController = new ListUsersController(listUsersService);

  return listUsersController;
}