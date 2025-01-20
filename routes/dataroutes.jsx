const express = require("express")
const router = express.Router();

const {imageUpload, videoUpload, imagereducerUpload, localfileUpload} = require("../controllers/file.jsx");

router.post("/imageupload",imageUpload);
router.post("/localfileupload",localfileUpload);
router.post("/videopload",videoUpload)


module.exports = router;