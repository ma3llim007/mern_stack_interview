import { model, Schema } from "mongoose";

const todoSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        description: {
            type: String,
        },
        category: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const Todo = model("Todo", todoSchema);
