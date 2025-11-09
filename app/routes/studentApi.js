const express=require('express')
const studentApiController = require('../controller/studentApiController')

const router=express.Router()

router.post('/create-student',studentApiController.createStudent)
router.get('/get-student',studentApiController.getStudent)
router.get('/get-student/:id',studentApiController.getSingleStudent)
router.put('/update-student/:id',studentApiController.UpdateStudentData)
router.delete('/delete-student/:id',studentApiController.DeleteStudent)
module.exports=router