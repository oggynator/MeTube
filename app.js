  
const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.use(express.static('public'));
app.use(express.static('videos'));

//SSR server side rendering 
const fs =require("fs");
const navbarPage = fs.readFileSync(__dirname+ "/public/navbar/navbar.html", "utf8");
const frontpagePage = fs.readFileSync(__dirname+"/public/frontpage/frontpage.html", "utf8");
const footerPage = fs.readFileSync(__dirname+"/public/footer/footer.html", "utf8");
const playerPage = fs.readFileSync(__dirname+"/public/player/player.html", "utf8");
const uploadPage = fs.readFileSync(__dirname+"/public/upload/upload.html", "utf8");


app.get("/", (req,res)=>{
    
    return res.send(navbarPage+frontpagePage+footerPage);
});

app.get("/player/:videoid", (req,res)=>{
    
    return res.send(navbarPage+playerPage+footerPage);
});

app.get("/upload", (req,res)=>{
    
    return res.send(navbarPage+uploadPage+footerPage);
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