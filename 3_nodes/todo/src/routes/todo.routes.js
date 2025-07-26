import { Router } from "express";
import { addTodo, deleteTodo, editTodo, todos } from "../controllers/todo.controller.js";

const todoRoutes = Router();

// Route
todoRoutes.route("/add-todo").post(addTodo);
todoRoutes.route("/todos").get(todos);
todoRoutes.route("/edit-todo/:todoId").patch(editTodo);
todoRoutes.route("/delete-todo/:todoId").delete(deleteTodo)

export default todoRoutes;
