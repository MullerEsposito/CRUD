import { IUpdateUserDTO } from "../../dtos";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class UpdateUserService {
  constructor(private usersRespository: IUsersRepository) {}

  async execute(user: IUpdateUserDTO): Promise<User> {
    const foundUser = await this.usersRespository.getUserById(user.id);

    if (!foundUser) throw new Error("The user doesn't exist.");

    const updatedUser = await this.usersRespository.update(user);

    return updatedUser;
  }
}