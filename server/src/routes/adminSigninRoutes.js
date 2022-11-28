import express from "express";
import { signin } from "../controllers/adminSigninController.js"
const adminSigninRouter = express.Router();

adminSigninRouter.post("/signin", signin);

export default adminSigninRouter;