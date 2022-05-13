import { Router } from "express";
import { getCreateUserController } from "../modules/users/useCases/createUser";
import { getDeleteUserController } from "../modules/users/useCases/deleteUser";
import { getListUsersController } from "../modules/users/useCases/listUsers";
import { getUpdateUserController } from "../modules/users/useCases/updateUser";

export const usersRoutes = Router();

usersRoutes.get("/", (req, res) => {
  return getListUsersController().handle(req, res);
});

usersRoutes.post("/", (req, res) => {
  return getCreateUserController().handle(req, res);
});

usersRoutes.put("/", (req, res) => {
  return getUpdateUserController().handle(req, res);
});

usersRoutes.delete("/:id", (req, res) => {
  return getDeleteUserController().handle(req, res);
});