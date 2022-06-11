// membuat server 
const express = require("express");
const server = express();
const {join} = require("path");

const PORT = 3000;
server.use("/",express.static("public"));

server.get("*",(req,res)=>{

	res.sendFile(join(__dirname,"public","index.html"));

});

server.listen(PORT,()=>{

	console.log(`server litening at ${PORT}`);

});

