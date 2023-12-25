import express, { NextFunction, Request, Response } from "express";
const app = express();
import cors from "cors";
import { UserRouter } from "./UserModel/user.route";
import httpStatus from "http-status";
import { globalErrorHandler } from "./helpers/ErrorHandlingFolder/globalErrorHandler";
app.use(express.json());
app.use(cors());
app.use("/api", UserRouter);

app.use(globalErrorHandler);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
