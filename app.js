const express = require("express");
const app = express();


app.get("/", (req,res)=>{
    
    return res.sendfile(__dirname + "/public/index.html");
});

app.listen(process.env.PORT, error=>{
    if(error){
        console.error(error);
    }
    console.error("Server is alive and running on port:", process.env.PORT);
    
});