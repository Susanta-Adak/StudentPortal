import mongoose from 'mongoose';

const StudentSchema = mongoose.Schema({
    studentId: {
        type: String,
        require : true
    },
    name : {
        type : String,
        require : true
    },
    address: {
        type : String,
        require : true
    },
    mobileNumber: {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    email: {
        type : String,
        require : true
    },
    guardianId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Guardian"
    },
    role:{
        type: String,
        enum: ["student"],
        default: "student"
    }
},{timestamps : true});

const studentModel = mongoose.model("Student", StudentSchema);
export default studentModel;