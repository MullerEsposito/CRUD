import { ICreateUserDTO, IUpdateUserDTO } from "../dtos";
import { User } from "../entities/User";

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  list(): Promise<User[]>;
  update(data: IUpdateUserDTO): Promise<User>;
  delete(id: string): Promise<void>;
  getUserById(id: string): Promise<User>;
  getUserByEmail(email: string): Promise<User>;
}