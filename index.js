const express = require("express")
const app = express();
const fileupload = require("express-fileupload")

require("dotenv").config()
require("./config/database").connectDatabse();
require("./config/cloudinary").clodinaryConnect();
const userRoutes = require("./routes/dataroutes")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(fileupload())
app.use('/api/v1/upload',userRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT,(req,res)=>{
    console.log(`server is running on port ${PORT}`)
})