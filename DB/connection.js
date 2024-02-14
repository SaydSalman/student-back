const mongoose = require('mongoose')

const connectionString = process.env.connectionString

mongoose.connect(connectionString).then(
()=>{
    console.log("MongoDB connected successfully")
}).catch((err)=>{
    console.log('mongodb connection failed',err);
    
})