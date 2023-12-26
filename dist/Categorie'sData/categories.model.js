"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Categories"]
    },
    createdBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        // ref
        unique: true
    }
});
