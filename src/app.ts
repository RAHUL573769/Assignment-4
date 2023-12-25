import express from "express";
const app = express();
import cors from "cors";
import { UserRouter } from "./UserModel/user.route";
app.use(express.json());
app.use(cors());
app.use("/api", UserRouter);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
