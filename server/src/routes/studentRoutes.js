import express from "express";
import { signin, getInfo } from "../controllers/studentController.js";
import auth from "../middlewares/auth.js";
const studentRouter = express.Router();

/**
 * @openapi
 * /student/signin:
 *   post:
 *     tags:
 *       - "student-signin"
 *     description: "student signis opction."
 *     operationId: ctrlValue.addValue
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: formData
 *         name: studentID
 *         type: number
 *         description: student ID number.
 *       - in: formData
 *         name: password
 *         type: string
 *         description: Password.
 *     responses:
 *       '200':
 *         description: Add Value Response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 status:
 *                   type: string
 *       '400':
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message = Invalid request
 *                 status:
 *                   type: string
 *                   description: Status = failure
 */
studentRouter.post("/signin", signin);


/**
 * @openapi
 * /student/info:
 *   get:
 *     tags:
 *       - "student-signin"
 *     description: "get student info"
 *     operationId: ctrlValue.addValue
 *     produces:
 *       - application/json
 *     responses:
 *       '200':
 *         description: ok
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 studentId:
 *                   type: string
 *                 name:
 *                   type: string
 *                 address:
 *                   type: string
 *                 mobileNumber:
 *                   type: string
 *                 password:
 *                   type: string
 *                 email:
 *                   type: string
 *                 guardianId:
 *                   type: string
 *                 role:
 *                   type: string
 *       '401':
 *         description: Unauthorized User
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message = Unauthorized
 *                 status:
 *                   type: string
 *                   description: Status = failure
 */
studentRouter.get("/info",auth, getInfo);

export default studentRouter;