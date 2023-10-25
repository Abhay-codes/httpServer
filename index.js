const http =require('http') //to create a server 
const myServer=http.createServer((req,res)=>{; //create a server  //callback function 
//req --> info about  requasting user 
// res 
    console.log("new req recieved");
    res.end("Hello from server")
}
);
myServer.listen(8000,() => console.log("server started "));
 //port to run the server 
// multiple servers cant run on same port 