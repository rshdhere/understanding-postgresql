import "dotenv/config";
import { Client } from "pg";

export const pgClient = new Client({
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: parseInt(process.env.DATABASE_PORT || "5432"),
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  ssl: {
    rejectUnauthorized: false, // For development - use true in production with proper certificates
  },
});

export async function ConnectedToDB() {
  try {
    await pgClient.connect();
    console.log("connected to database");
    // here goes the basic crud for postgres using pg-client
    // const response = await pgClient.query("SELECT * FROM users;");
    // const response = await pgClient.query(
    //   "update users set username='rose mishra' where id='1'",
    // );
    // console.log(response);
  } catch (error) {
    console.error("Error occured while connecting to the database", error);
  }
}
