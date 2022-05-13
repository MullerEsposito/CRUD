import { Router } from "express";

export const set02Routes = Router();

set02Routes.get("/", (req, res) => {
  return res.send("Hello World from Set02!");
});