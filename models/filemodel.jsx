const mongoose = require("mongoose")
const { type } = require("os")
const nodemailer = require("nodemailer")

const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String
    },
    tags:{
        type:String
    },
    email:{
        type:String
    }
})

// post middleware
fileSchema.post('save', async function(doc){
    try{
        // transporter
        let transporter = nodemailer.createTransport({
            host: process.env.HOST,
            auth:{
                user: process.env.USER,
                pass: process.env.PASS
            }
        })

        // send mail
        let sendmail = await transporter.sendMail({
            from: process.env.USER,
            to: doc.email,
            subject: "File uploaded",
            text: `File uploaded successfully`
        })
    }
    catch(err){
        console.log(err)
    }
})


module.exports = mongoose.model("File",fileSchema)