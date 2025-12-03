require("dotenv").config();

const express = require("express");

// path
const path = require("path");

// create a server 
const server = express();

server.use(express.static("public"));


// ROutes for server
server.get("/", function(request, response){
    //response.send("This is the home response")
    let indexPath = path.join(__dirname, "public", "index.html");

    //console.log(indexPath);
    response.sendFile(indexPath);
});


server.get("/about", function(request, response){

    let aboutPath = path.join(__dirname, "public", "about.html");

    response.sendFile(aboutPath);

});


server.get("/contact", function(request, response){

    let contactPath = path.join(__dirname, "public", "contactus.html");

    response.sendFile(contactPath);

});

server.get("/products", function(request, response){

    response.send("This is product response");

});


// listen for requests 
server.listen(process.env.PORT, () => console.log(`Server is listening on PORT: ${process.env.PORT}`) );