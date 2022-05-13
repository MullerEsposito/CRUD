import { ICreateUserDTO, IUpdateUserDTO } from "../../dtos";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepositoryInMemory implements IUsersRepository {
  private users: User[];
  private static INSTANCE: UsersRepositoryInMemory;

  constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepositoryInMemory {
    if (!UsersRepositoryInMemory.INSTANCE) {
      UsersRepositoryInMemory.INSTANCE = new UsersRepositoryInMemory();
    }
    return UsersRepositoryInMemory.INSTANCE;
  }
  
  async getUserByEmail(email: string): Promise<User> {
    const foundUser = this.users.find(user => user.email === email);

    return foundUser;
  }

  async getUserById(id: string): Promise<User> {
    const foundUser = this.users.find(user => user.id === id);

    return foundUser;
  }

  async create(data: ICreateUserDTO): Promise<User> {
    const newUser = new User(data);
    this.users.push(newUser);

    return newUser;
  }

  async list(): Promise<User[]> {
    return this.users;
  }

  async update(data: IUpdateUserDTO): Promise<User> {
    const foundUser = this.users.find(user => user.id === data.id);
    const updatedUser = new User(data);
    Object.assign(foundUser, updatedUser);

    return foundUser;
  }
  
  async delete(id: string): Promise<void> {
    const foundUserIndex = this.users.findIndex(user => user.id === id);

    this.users.splice(foundUserIndex, 1);
  }
}