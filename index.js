const express = require("express")
const app = express();
const fileupload = require("express-fileupload")

require("dotenv").config()
const connectDatabase = require('./config/database.jsx');
connectDatabase();
const cloud = require("./config/cloudinary.jsx");
cloud.cloudinaryConnect();
const userRoutes = require("./routes/dataroutes.jsx")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
app.use('/api/v1/upload',userRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT,(req,res)=>{
    console.log(`server is running on port ${PORT}`)
})