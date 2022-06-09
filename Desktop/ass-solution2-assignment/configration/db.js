const mongoose = require("mongoose")

const connectiondb = ()=>{
    mongoose
    .connect(process.env.CONNECTION_STRING)
    .then((result)=> console.log("db connected"))
    .catch((err)=> console.log(" db conection fail" , err))
}


module.exports = connectiondb