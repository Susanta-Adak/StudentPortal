import express from "express";
import { addStudent, updateStudent, deleteStudent, getStudentById, getStudents, signin } from "../controllers/adminController.js";
import auth from "../middlewares/auth.js";
const adminRouter = express.Router();

adminRouter.get("/:id", getStudentById);
adminRouter.get("/", getStudents);
adminRouter.post("/", addStudent);
adminRouter.delete("/:id", deleteStudent);
adminRouter.put("/:id", updateStudent);
adminRouter.post("/signin", signin);

export default adminRouter;