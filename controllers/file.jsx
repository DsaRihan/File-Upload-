const File = require('../models/filemodel.jsx');
const cloudinary = require("cloudinary").v2

exports.localfileUpload = async(req,res)=>{
    try{    
        // fetch the file
        const file = req.files.file;

        // define the server path
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        
        // move the file
        file.mv(path,(err)=>{
            console.log(err)
        })

        res.json({
            success:true,
            message:"local file uploaded succesfully"
        })
    }
    catch(err){
        console.log(err)
    }
}


// function
function filetypesupported (type,supptype){
    return supptype.includes(type)
}

// function
async function uplpadfiletoclodinary(file,folder,quality) {
    const option  = {folder}

    if(quality){
        option.quality = quality;
    }
    option.resource_type = "auto"     //automatically detect the file type
    await  cloudinary.uploader.upload(file.tempFilePath);
}

// imageupload to cloudinary
exports.imageUpload = async(req,res)=>{
    try{
        // fetch the data to upload to database
        const {name ,tags, email, imageUrl} = req.body;

        // fetch the file
        const file = req.files.imagefile;

        // validation of the .file
        const suptypes = ["jpg","jpeg","png"]
        const filetype = file.name.split(".")[1].toLowerCase();

        // function to check if the file type is valid
        if(!filetypesupported(filetype,suptypes)){
            return res.status(400).json({
                success:false,
                message:"file type not supported"
            })
        }

        // format supported
        // upload to cloudinary
        const response = await uplpadfiletoclodinary(file,"rihanfile")
        console.log(response)

        // save it in the db
        const newImage = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url
        })

        res.json({
            success:true,
            message:"image uploaded successfully",
        })
    }
    catch(err){
        res.status(400).json({
            success:false,
            message:"Error uploading image"
        })
    }
}

// video upload
exports.videoUpload = async(req,res)=>{
    try{
        // fetch the data to upload to database
        const {name ,tags, email, imageUrl} = req.body;

        // fetch the file
        const file = req.files.videofile;

        // validation of the .file
        const suptypes = ["mp4","mov"]
        const filetype = file.name.split(".")[1].toLowerCase();

        // function to check if the file type is valid
       if(!filetypesupported(filetype,suptypes) || file.size > 5 * 1024 * 1024){
            return res.status(400).json({
            success:false,
            message:"file type not supported or file size exceeds 5MB"
            })
        }

        // format supported
        // upload to cloudinary
        const response = await uplpadfiletoclodinary(file,"rihanfile")
        console.log(response)

        // save it in the db
        const newvideo = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url
        })

        res.json({
            success:true,
            message:"Video uploaded successfully",
        })
    }
    catch(err){
        res.status(400).json({
            success:false,
            message:"Error uploading video"
            })
    }
}

// image reduce upload
exports.imageUpload = async(req,res)=>{
    try{
        // fetch the data to upload to database
        const { name, tags, email, imageUrl } = req.body;

        // fetch the file
        const file = req.files.imagefile;

        // validation of the .file
        const suptypes = ["jpg", "jpeg", "png"];
        const filetype = file.name.split(".")[1].toLowerCase();

        // function to check if the file type is valid
        if (!filetypesupported(filetype, suptypes)) {
            return res.status(400).json({
                success: false,
                message: "file type not supported"
            });
        }

        // format supported
        // upload to cloudinary
        const response = await uplpadfiletoclodinary(file, "rihanfile",90);
        console.log(response);

        // save it in the db
        const newImage = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url
        });

        res.json({
            success: true,
            message: "image uploaded successfully",
        });
    }
    catch(err){
        res.status(400).json({
            success:false,
            message:"Error uploading image"
            })
    }
}