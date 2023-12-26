"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categories = void 0;
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Categories"]
    },
    createdBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        unique: true,
        ref: "User" //reference to user Model
    }
});
exports.Categories = (0, mongoose_1.model)("Categories", categorySchema);
