import { Router, Request, Response } from "express";
import { pgClient } from "../database/database.js";

const userRouter = Router();

userRouter.post("/sign-up", async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  const city = req.body.city;
  const country = req.body.country;
  const street = req.body.street;
  const pincode = req.body.pincode;
  // RETURNING id must be here
  const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id`;
  const response = await pgClient.query(insertQuery, [
    username,
    email,
    password,
  ]);
  //perform console.log(userId) to understand
  const userId = response.rows[0].id;
  const addressInsertQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5)`;

  await pgClient.query(addressInsertQuery, [
    city,
    country,
    street,
    pincode,
    userId,
  ]);

  res.json({
    message: "you have signed up",
  });
});

export default userRouter;
