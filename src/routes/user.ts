import { Router, Request, Response } from "express";
import { pgClient } from "../database/database.js";

const userRouter = Router();

userRouter.post("/sign-up", async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`;

  await pgClient.query(insertQuery, [username, email, password]);

  res.json({
    message: "you have signed up",
  });
});

export default userRouter;
