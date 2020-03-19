const router = require("express").Router();

//TODO what should we do here
const videos =[];

router.get("/test", (req, res)=>{
    return res.send({message: "does the router work?"});
});

module.exports = router;