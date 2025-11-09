require('dotenv').config()
const express=require('express')
const app=express()
const ejs=require('ejs')
const path=require('path')
const connectDB=require('./app/config/db');


connectDB()

app.use(express.json())
app.set("view engine","ejs")
app.set("views","views")
const homeRoute=require('./app/routes/homeRoute')
app.use(homeRoute)

const studentApiRoute=require('./app/routes/studentApi')
app.use('/api',studentApiRoute)

const PORT=process.env.PORT||3006
app.listen(PORT,()=>{
    console.log(`server is running on this ${PORT}`)
});
