import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO, IUpdateUserDTO } from "../../dtos";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepositoryPG implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User);
  }

  async create(data: ICreateUserDTO): Promise<User> {
    const createdUser = this.repository.create(data);

    await this.repository.save(createdUser);

    return createdUser;
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find();

    return users;
  }

  async update(data: IUpdateUserDTO): Promise<User> {
    const userToUpdate = await this.repository.findOne({ where: { id: data.id }});
    Object.assign(userToUpdate, data);

    await this.repository.save(userToUpdate);

    return userToUpdate;
  }

  async delete(id: string): Promise<void> {
    const foundUser = await this.repository.findOne({ where: { id }});

    await this.repository.remove(foundUser);
  }

  async getUserById(id: string): Promise<User> {
    const foundUser = await this.repository.findOne({ where: { id }});

    return foundUser;
  }

  async getUserByEmail(email: string): Promise<User> {
    const foundUser = await this.repository.findOne({ where: { email } });
    console.log(`repository: ${foundUser}`);


    return foundUser;
  }

}