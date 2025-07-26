import { Router } from "express";
import { error, studentData } from "../controllers/general.controller.js";

const generalRoutes = Router();

generalRoutes.route("/student").get(studentData);
generalRoutes.route("/error").get(error);

export default generalRoutes;
