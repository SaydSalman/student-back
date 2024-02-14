const applicants = require('../Models/studentsModel')

exports.register =async (req,res)=>{
    const {firstname,lastname,address,email,gender,mobile,password,dob,course} = req.body
    try {
        const existingUser = await applicants.findOne({email})
        console.log(existingUser);
        if(existingUser){
            res.status(406).json("student has already registered")
        }else{
            const newStudent = new applicants({
                firstname,lastname,address,email,gender,mobile,password,dob,course
            })
            await newStudent.save()
            res.status(200).json(newStudent)
        }
    } catch (error) {
        res.status(400).json(error.message)
    }
    
}
exports.students = async(req,res)=>{
    const {firstname,lastname,address,email,gender,mobile,password,dob,course} = req.body
    try {
        const data = await applicants.find({})
        res.status(200).send(data)
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error')
    }
}

