const mongoose = require("mongoose")
const { type } = require("os")

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

module.exports = mongoose.model("File",fileSchema)