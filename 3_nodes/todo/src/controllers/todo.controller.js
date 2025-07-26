import { isValidObjectId } from "mongoose";
import { Todo } from "../models/todo.model.js";
import { ApiError, ApiResponse } from "../utils/ApiUtils.js";

// Add Todo
const addTodo = async (req, res) => {
    try {
        const { name, description, category } = req.body;

        if (!name?.trim() || !category?.trim()) {
            return res.status(422).json(new ApiError(422, "Both Name And Category Is Required"));
        }
        const todo = await Todo.create({ name, description, category });

        return res.status(201).json(new ApiResponse(201, todo, "Todo Add Successfully"));
    } catch (error) {
        return res.status(404).json(new ApiError(404, "Something Went Wrong While Adding New Todo"));
    }
};

// All Todos
const todos = async (req, res) => {
    try {
        let page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 3;
        // Calculate of number of documents to skip
        const skip = (page - 1) * limit;
        // Calculate total number of documents
        const totalTodo = await Todo.countDocuments();
        // Calculate total pages
        const totalPages = Math.ceil(totalTodo / limit);
        // Adjust Page If It Exceeds Total Pages
        if (page > totalPages && totalPages > 0) {
            page = totalPages;
        }
        // Fetching the blogs
        const todes = await Todo.find().skip(skip).limit(limit);

        // If no blogs are found, handle the empty state
        if (!todes.length) {
            return res.status(200).json(new ApiResponse(200, { todes: [], page, totalPages }, "No Blogs Found"));
        }

        return res.status(200).json(new ApiResponse(200, { todes, page, totalPages }, "Todos Fetched Successfully"));
    } catch (error) {
        return res.status(404).json(new ApiError(404, "Something Went Wrong While Fetching Todos"));
    }
};

// Edit Todo
const editTodo = async (req, res) => {
    try {
        const { todoId } = req.params;
        const { name, category, description } = req.body;

        if (!todoId) {
            return res.status(422).json(new ApiError(422, "Todo-ID is Required"));
        }
        const todo = await Todo.findById(todoId);
        if (!todo) {
            return res.status(404).json(new ApiError(404, "Todo Not Found"));
        }
        if (name) {
            todo.name = name;
        }
        if (category) {
            todo.category = category;
        }
        if (description) {
            todo.description = description;
        }
        await todo.save();

        return res.status(200).json(new ApiResponse(200, todo, "Todo Updated Successfully"));
    } catch (error) {
        console.error(error);
        return res.status(404).json(new ApiError(404, "Something Went Wrong While Updating Todo"));
    }
};

// Delete Todo
const deleteTodo = async (req, res) => {
    try {
        const { todoId } = req.params;

        if (!todoId) {
            return res.status(422).json(new ApiError(422, "Todo-ID is Required"));
        }
        if (!isValidObjectId(todoId)) {
            return res.status(422).json(new ApiError(422, "TodoID is Invalid"));
        }
        const todo = await Todo.findByIdAndDelete(todoId);
        if (!todo) {
            return res.status(404).json(new ApiError(404, "Todo Not Found"));
        }

        return res.status(200).json(new ApiResponse(200, null, "Todo Delete Successfully"));
    } catch (error) {
        console.error(error);
        return res.status(404).json(new ApiError(404, "Something Went Wrong While Updating Todo"));
    }
};

export { addTodo, todos, editTodo, deleteTodo };
