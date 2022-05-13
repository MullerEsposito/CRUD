import { UsersRepositoryPG } from "../../repositories/postgres/UsersRepositoryPG";
import { CreateUserController } from "./createUserController";
import { CreateUserService } from "./createUserService";

export function getCreateUserController(): CreateUserController {  
  const usersRepository = new UsersRepositoryPG();

  const createUserService = new CreateUserService(usersRepository);

  const createUserController = new CreateUserController(createUserService);

  return createUserController;
}