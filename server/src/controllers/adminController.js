import studentModel from "../models/student.js";
import guardianModel from "../models/guardian.js";

export const addStudent = async (req, res) => {
    const { studentId, name, address, mobileNumber, password, email, photo} = req.body;

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
            photo,
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
    const id = req.params.id;
    const { studentId, name, address, mobileNumber, password, email, photo} = req.body;
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
        photo,
        guardianId
    };

    try {
        await studentModel.findByIdAndUpdate(id, newStudent, {new: true});
        res.status(200).json(newStudent);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong." });
    }

}

export const deleteStudent = async (req, res) => {
    const id = req.params.id;
    try {
        const student = await studentModel.findByIdAndDelete(id);
        res.status(200).json(student);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong." });
    }
}

export const getStudentById = async (req, res, next) => {
    const id = req.params.id;
    try {
        const student = await studentModel.findById(id);
        if(!student){
            throw new Error("notFound");
        }
        res.status(200).json(student);

    } catch (error) {
        console.log(error);
        // res.status(500).json({ message: "Something went wrong." });
        // next({status:400, message:"not found"});
        next(error);
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


