import express from "express";
import { signin, getInfo } from "../controllers/studentController.js";
import auth from "../middlewares/auth.js";
const studentRouter = express.Router();

studentRouter.post("/signin", signin);
studentRouter.get("/info",auth, getInfo);

export default studentRouter;