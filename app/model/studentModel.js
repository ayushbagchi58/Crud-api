const mongoose=require('mongoose')
const Schema=mongoose.Schema

const studentSchema=new Schema({
    name:{
        type: String,
        required:[true,"Please add a name"]
    },
    email:{
        type:String,
        required:true,
        unique:[true,"email already exists"]
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const StudentModel=mongoose.model('student',studentSchema)
module.exports=StudentModel