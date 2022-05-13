import { IUsersRepository } from "../../repositories/IUsersRepository";

export class DeleteUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string): Promise<void> {
    const foundUser = await this.usersRepository.getUserById(id);

    if (!foundUser) throw new Error("The user doesn't exist.");

    await this.usersRepository.delete(id);
  }
}