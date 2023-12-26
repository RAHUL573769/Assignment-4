import { Schema } from "mongoose";
import { ICategory } from "./categories.interface";

const categorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: [true, "Please Enter Categories"]
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    // ref
    unique: true
  }
});
