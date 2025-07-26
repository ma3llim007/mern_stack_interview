import { Router } from "express";
import { createUser, deleteUser, getUsers, updateUser, userById } from "../controllers/users.controller.js";

const userRoutes = Router();

userRoutes.route("/create-user").post(createUser);
userRoutes.route("/users").get(getUsers);
userRoutes.route("/user/:id").get(userById);
userRoutes.route("/user/:id").put(updateUser);
userRoutes.route("/delete-user").delete(deleteUser);

export default userRoutes;
