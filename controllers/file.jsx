const File = require('../models/filemodel');

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