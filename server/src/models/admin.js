import mongoose from 'mongoose';

const AdminSchema = mongoose.Schema({
    email: {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    role:{
        type: String,
        enum: ["admin"],
        default: "admin"
    }
},{timestamps : true});

const adminModel = mongoose.model("Admin", AdminSchema);
export default adminModel;