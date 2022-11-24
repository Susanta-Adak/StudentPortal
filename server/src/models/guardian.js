import mongoose from 'mongoose';
const GuardianSchema = mongoose.Schema({
    name: {
        type : String,
        require : true
    },
    mobileNumber: {
        type : Number,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    studentId: {
        type :String,
        require : true
    },
    role:{
        type: String,
        enum: ["guardian"],
        default: "guardian"
    }
},{timestamps : true});

const guardianModel = mongoose.model("Guardian", GuardianSchema);
export default guardianModel;