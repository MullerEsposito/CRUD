import { Router } from "express";
import { usersRoutes } from "./users.routes";
import { set02Routes } from "./set02.routes";

export const router = Router();

router.use("/users", usersRoutes);
router.use("/set02", set02Routes);

router.get("/", (req, res) => {
  return res.send("Hello World!");
});