import studentModel from "../models/student.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

export const signin = async (req, res) => {
    const {studentId, password} = req.body;
    try {
        //Existing user check
        const existingUser = await studentModel.findOne({ studentId : studentId });
        if (!existingUser) {
            return res.status(404).json({ message: "User not found." });
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password);
        if(!matchPassword){
            return res.status(400).json({message : "Invalid Credentials"});
        }

        //Token generate
        const token = jwt.sign({ studentId: existingUser.studentId, id: existingUser._id }, SECRET_KEY);
        // save jwt in HttpOnly cookie
        res.cookie('jwt_token', token, { 
            httpOnly: true
        });
        res.status(200).json({ user: existingUser, token: token });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong." });
    }
}

export const getInfo = async (req, res) =>{
    const id = req.userId;
    try {
        let val = req.cookies.jwt_token;
        console.log(val);
        const student = await studentModel.findById(id);
        res.status(200).json(student);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong." });
        // next(error);
    }
}
