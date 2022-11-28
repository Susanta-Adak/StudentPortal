import express from "express";
import { addStudent, updateStudent, deleteStudent, getStudentById, getStudents } from "../controllers/adminController.js";
const adminRouter = express.Router();

adminRouter.get("/:id", getStudentById);
adminRouter.get("/", getStudents);
adminRouter.post("/", addStudent);
adminRouter.delete("/:id", deleteStudent);
adminRouter.put("/:id", updateStudent);

export default adminRouter;