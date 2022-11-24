import express from "express";
import { signin } from "../controllers/studentController.js";
import auth from "../middlewares/auth.js";
const studentRouter = express.Router();

studentRouter.post("/signin", signin);

export default studentRouter;