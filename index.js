//const http =require('http') //to create a server 
//const fs=require("fs");
//const url =require("url")
const express=require("express"); 
const app =express();//handler function , different http methods
//console.log(Date.now());

app.get("/",(req,res)=>{
    return res.send("hllo from the homepage ");
});
app.get("/about",(req,res)=>{
    return res.send("hello  " + req.query.name);
});
app.post("/about",(req,res)=>{
    return res.send("post req from about");
});

//const myServer=http.createServer(app);
















/*const myServer=http.createServer((req,res)=>{//create a server  //callback function 
//req --> info about  requasting user 
// res 
    
    const log = `${Date.now()}: 
        
     ${req.url} New requast received\n`;

    fs.appendFile('log.txt',log,(err,data)=>{
        switch(req.url){
            case '/':
                res.end("homepage");
                break;
            case '/about':
                res.end("about");
                break;
            default:
                res.end("404 not found");
                break;
        }
        


    });
    
    
});*/


//myServer.listen(8000,() => console.log("server started "));
 //port to run the server 
// multiple servers cant run on same port start 
//alternative using express 
app.listen(8000,()=>console.log("SERVER STARTED!"));