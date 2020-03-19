const express = require("express");
const app = express();

app.use(express.static('public'));
app.use(express.static('videos'));

//SSR server side rendering 
const fs =require("fs");
const navbarPage = fs.readFileSync(__dirname+ "/public/navbar/navbar.html", "utf8");
const frontpagePage = fs.readFileSync(__dirname+"/public/frontpage/index.html", "utf8");
const footerPage = fs.readFileSync(__dirname+"/public/footer/footer.html", "utf8");
const playerPage = fs.readFileSync(__dirname+"/public/player/player.html", "utf8");


app.get("/", (req,res)=>{
    
    return res.send(navbarPage+frontpagePage+footerPage);
});

app.get("/player/:videoid", (req,res)=>{
    
    return res.send(navbarPage+playerPage+footerPage);
});

//import routes
const videosRoute = require("./routes/videos");

//setup routes
app.use(videosRoute);



app.listen(process.env.PORT, error=>{
    if(error){
        console.error(error);
    }
    console.error("Server is alive and running on port:", process.env.PORT);
    
});