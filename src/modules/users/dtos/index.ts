export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

export interface IUpdateUserDTO {
  id: string;
  name: string;
  email: string;
  password: string;
}