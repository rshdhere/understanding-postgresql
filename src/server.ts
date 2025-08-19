import express from "express";
import { ConnectedToDB } from "./database/database.js";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

async function StartServer() {
  await ConnectedToDB();
  app.listen(PORT, () => {
    console.log(`your server is listening on http://localhost:${PORT}`);
  });
}

StartServer();
