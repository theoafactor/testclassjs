require("dotenv").config();

const express = require("express");

// create a server 
const server = express();


// ROutes for server
server.get("/", function(request, response){
    response.send("This is the home response")
});


server.get("/about", function(request, response){

    response.send("This is the about response");

});


server.get("/contact", function(request, response){

    response.send("This is contact response");

});

server.get("/products", function(request, response){

    response.send("This is product response");

});


// listen for requests 
server.listen(process.env.PORT, () => console.log(`Server is listening on PORT: 1234`) );