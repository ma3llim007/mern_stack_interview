import { Router } from "express";
import { about, contact, home } from "../controllers/multiple.controller.js";

const multipleRoutes = Router();



multipleRoutes.route("/").get(home);
multipleRoutes.route("/about").get(about);
multipleRoutes.route("/contact").get(contact);

export default multipleRoutes;
