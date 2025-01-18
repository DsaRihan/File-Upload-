const express = require("express")
const router = express.Router();

const {imageUpload, videoUpload, imagereducerUpload, localfileUpload} = require("../controllers/file");

router.post("/imageupload",imageUpload);
router.post("/videopload",videoUpload);
router.post("/localfileupload",localfileUpload)


module.exports = router;