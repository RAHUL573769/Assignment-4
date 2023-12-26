import express, { NextFunction, Request, Response } from "express";
const app = express();
import cors from "cors";
import { UserRouter } from "./User'sData/user.route";
import httpStatus from "http-status";
import { globalErrorHandler } from "./helpers/ErrorHandlingFolder/globalErrorHandler";
import { CategoriesRouter } from "./Categorie'sData/categories.routes";
app.use(express.json());
app.use(cors());
app.use("/api", UserRouter);
app.use("/api", CategoriesRouter);
app.use(globalErrorHandler);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
