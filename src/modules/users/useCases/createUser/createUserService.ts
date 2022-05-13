import { ICreateUserDTO } from "../../dtos";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(user: ICreateUserDTO): Promise<User> {    
    const alreadyExistsEmail = await this.usersRepository.getUserByEmail(user.email);

    if (alreadyExistsEmail) throw new Error("Already exists an user registered with that e-mail.");

    const createdUser = this.usersRepository.create(user);

    return createdUser;
  }
}