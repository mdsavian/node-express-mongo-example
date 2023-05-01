import express, { Express } from "express";
import dotenv from "dotenv";
import connectDB from "./database/connection";
import router from "./routes/index";

dotenv.config();

connectDB();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
