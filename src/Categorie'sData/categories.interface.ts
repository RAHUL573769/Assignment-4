import mongoose from "mongoose";

export type ICategory = {
  name: string;
  createdBy: mongoose.Schema.Types.ObjectId; //reference to user
};
