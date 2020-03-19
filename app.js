const express = require("express");
const app = express();

app.use(express.static('public'));



app.get("/", (req,res)=>{
    
    return res.sendFile(__dirname + "/public/index.html");
});

app.get("/player/:videoid", (req,res)=>{
    
    return res.sendFile(__dirname + "/public/player.html");
});

app.listen(process.env.PORT, error=>{
    if(error){
        console.error(error);
    }
    console.error("Server is alive and running on port:", process.env.PORT);
    
});