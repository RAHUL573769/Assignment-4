import { Schema, model } from "mongoose";
import { ICategory } from "./categories.interface";

const categorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: [true, "Please Enter Categories"]
  },
  createdBy: {
    type: Schema.Types.ObjectId,

    unique: true,
    ref: "User" //reference to user Model
  }
});

export const Categories = model<ICategory>("Categories", categorySchema);
