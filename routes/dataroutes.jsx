const express = require("express")
const router = express.Router();

const {imageUpload, videoUpload, imagereducerUpload, localfileUpload} = require("../controllers/file.jsx");

router.post("/imageupload",imageUpload);
router.post("/localfileupload",localfileUpload);
// router.post("/videopload",videoUpload);
// router.post("/localfileupload",localfileUpload)


module.exports = router;