import express from "express";
import { ConnectedToDB } from "./database/database.js";
import userRouter from "./routes/user.js";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api/v1/user", userRouter);

async function StartServer() {
  await ConnectedToDB();
  app.listen(PORT, () => {
    console.log(`your server is listening on http://localhost:${PORT}`);
  });
}

StartServer();
