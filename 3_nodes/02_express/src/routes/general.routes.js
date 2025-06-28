import { Router } from "express";
import { error, studentData } from "../controllers/general.controller.js";
import { urlPath } from "../middleware/UrlPath.js";

const generalRoutes = Router();

generalRoutes.route("/student").get(urlPath, studentData);
generalRoutes.route("/error").get(error);

export default generalRoutes;
