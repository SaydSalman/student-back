require('dotenv').config()

const express = require('express')
const cors = require('cors')
const router = require('./Routes/user.route')
require('./DB/connection')
const studentRegister = express()

studentRegister.use(cors())
studentRegister.use(express.json())
studentRegister.use(router)
const PORT = 5000

studentRegister.listen(PORT,()=>{
    console.log(`Student Register Server Started at port ${PORT}` );
})

studentRegister.get('/',(req,res)=>{
    res.status(200).send("<h1>Student register Starte !!..</h1>")
})