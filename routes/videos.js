  
const router = require("express").Router();

const crypto = require("crypto");

const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "videos/");
    },
    filename: (req, file, cb) => {
        const fileName = crypto.randomBytes(20).toString("hex");
        const mimetypeArray = file.mimetype.split("/");
        if (mimetypeArray[0] === "video") {
            const extension = mimetypeArray[mimetypeArray.length - 1];
            cb(null, fileName + "." + extension);
        } else {
            cb("Not a video error. Mimetype: " + file.mimetype);
        }
    }
});
const upload = multer({ storage: storage });


//TODO what should we do herers
const videos =[
    {
        
        title: "Trippy",
        description: "Very trippy vid",
        fileName: "e589bfdb-28e3-4d90-a399-db849c27cfba.mp4",
        thumbnail: "",
        category: "Experimental",
        tags: ["trippy", "face", "sci-fi"],
        uploadDate: new Date(2020, 3, 26, 08, 43)
    }
];

const videosPerPage = 10;

router.get("/videos", (req, res) => {
    const page = Number(req.query.page) ? Number(req.query.page) : 1;
    const start = (page-1) * videosPerPage;
    const end = start + videosPerPage;

    return res.send({ response: videos.slice(start, end) });
});

router.get("/videos/:videoId", (req, res) => {       
    return res.send({ response: videos.find(video => video.fileName === req.params.videoId) });
});

router.post("/videos", upload.single('video'), (req, res) => {
  

  const video = {
    fileName: req.file.filename,
    title: req.body.title || "",
    description: req.body.description || "",
    thumbnail: "", //TODO
    category: req.body.category ? req.body.category: "unknown",
    uploadDate: new Date(),
    tags: req.body.tags.split(/\s*[,\s]\s*/),

  }

  errors= [];

  if (video.title.length < 8 || video.title.length > 64){
    errors.push("Your title is too damn short or too damn long");
  }
  if (video.description.length > 2048){
    errors.push("Your description is too damn long");
}

  if(errors.length > 0){
    return res.send({response: errors});
  }
  else{
    videos.push(video);
    return res.redirect("/");
  }
});

module.exports = router;