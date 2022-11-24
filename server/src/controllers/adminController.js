import studentModel from "../models/student.js";
import guardianModel from "../models/guardian.js";
import adminModel from "../models/admin.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

export const addStudent = async (req, res) => {
    const { studentId, name, address, mobileNumber, password, email} = req.body;

    const guardian = await guardianModel.findOne({studentId: studentId});
    let guardianId = null;
    if(guardian){
        guardianId = guardian.id;
    }

    try {
        //Existing user check
        const existingStudent = await studentModel.findOne({ studentId });
        if (existingStudent) {
            return res.status(400).json({ message: "User already exists." });
        }
        
        //Hashed pasword
        const hashedPassword = await bcrypt.hash(password, 10);

        //create student
        const newStudent = new studentModel({
            studentId,
            name,
            address,
            mobileNumber,
            password: hashedPassword,
            email,
            guardianId
        });

        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong." });
    }
}

export const updateStudent = async (req, res) => {
    const studentId = req.params.studentId;
    const { name, address, mobileNumber, password, email} = req.body;
    const guardian = await guardianModel.findOne({studentId: studentId});
    let guardianId = null;
    if(guardian){
        guardianId = guardian.id;
    }
    const newStudent ={
        name,
        address,
        mobileNumber,
        password,
        email,
        guardianId
    };

    try {
        await studentModel.findOneAndUpdate({studentId: studentId}, newStudent, {new: true});
        res.status(200).json(newStudent);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong." });
    }

}

export const deleteStudent = async (req, res) => {
    const studentId = req.params.studentId;
    try {
        const student = await studentModel.findOneAndDelete({studentId});
        res.status(200).json(student);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong." });
    }
}

export const getStudentById = async (req, res) => {
    const studentId = req.params.studentId;
    try {
        const student = await studentModel.findOne({ studentId });
        res.status(200).json(student);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong." });
    }
}

export const getStudents = async (req, res) => {
    try {
        const students = await studentModel.find();
        res.status(200).json(students);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong." });
    }
}

export const signin = async (req, res) => {
    const {email, password} = req.body;
    try {
        //Existing user check
        const existingUser = await adminModel.findOne({ email : email });
        if (!existingUser) {
            return res.status(404).json({ message: "User not found." });
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password);
        if(!matchPassword){
            return res.status(400).json({message : "Invalid Credentials"});
        }

        //Token generate
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET_KEY);
        res.status(200).json({ user: existingUser, token: token });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong." });
    }
}
