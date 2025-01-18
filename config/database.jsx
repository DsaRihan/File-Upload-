const mongoose = require("mongoose")
require("dotenv").config();

const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URL)
    .then(console.log("Database connected succesfully"))
    .catch((err)=>{console.log("Error while connecting database",err)})
}
module.exports = connectDatabase;