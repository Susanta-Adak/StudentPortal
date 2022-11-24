import mongoose from 'mongoose';
const NoticeSchema = mongoose.Schema({
    subject: {
        type : String,
        require : true
    },
    description: {
        type : String,
        require : true
    },
    pdf: {
        type:String
    }
},{timestamps : true});

const noticeModel = mongoose.model("Notice", NoticeSchema);
export default noticeModel;