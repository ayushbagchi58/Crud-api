
const Student=require("../model/studentModel")

class StudentApiController{
    async createStudent(req,res){
        try{
          const {name,email,phone,address}=req.body
          const studentData=new Student({
            name,
            email,
            phone,
            address
          })
          const data=await studentData.save()
          if(data){
            return res.status(201).json({
                status:true,
                message:"student created successfully!",
                data:data
            })
          }
        }catch(error){
          return res.status(500).json({
            status:false,
            message:error.message
          })
        }
    }
    async getStudent(req,res){
        try{
            const data=await Student.find()
            if(data){
                 return res.status(200).json({
                status:true,
                total:data.length,
                message:"student fetched successfully!",
                data:data
            })
            }
        }catch(error){
             return res.status(500).json({
            status:false,
            message:error.message
          })
        }
    }

    async getSingleStudent(req,res){
        try{
            const id=req.params.id
            const data=await Student.findById(id)
            if(data){
                 return res.status(200).json({
                status:true,
                message:"get single data",
                data:data
            })
            }
        }catch(error){
             return res.status(500).json({
            status:false,
            message:error.message
          })
        }
    }

    async UpdateStudentData(req,res){
        try{
            const id=req.params.id
            const data=await Student.findByIdAndUpdate(id,req.body)
            if(data){
                 return res.status(200).json({
                status:true,
                message:"Student updated successfully!",
            })
            }
        }catch(error){
             return res.status(500).json({
            status:false,
            message:error.message
          })
        }
    }

    async DeleteStudent(req,res){
        try{
            const id=req.params.id
            const data=await Student.findByIdAndDelete(id,req.body)
            if(data){
                 return res.status(200).json({
                status:true,
                message:"Student deleted successfully!",
            })
            }
        }catch(error){
             return res.status(500).json({
            status:false,
            message:error.message
          })
        }
    }
}

module.exports=new StudentApiController()