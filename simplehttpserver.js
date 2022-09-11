// any computer program that listen and waiting for any other computer

// lf4d listening to / sharing player movement

import http from "http";

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
