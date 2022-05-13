import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class ListUsersService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.list();

    return users;
  }
}