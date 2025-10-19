const http = require("node:http");
//Create a server
const server = http.createServer((req, res) => {
  // set the content to plain text
  res.setHeader("Content-Type", "text/plain");
  //Routing
  if (req.url === "/") {
    res.statusCode = 200; //OK
    res.end("Welcome to the Home Page!");
  } else if (req.url === "/about") {
    res.statusCode = 200; //OK
    res.end("This is the About Page.");
  } else if (req.url === "/contact") {
    res.statusCode = 200; //OK
    res.end("Contact us at: 123-456-7890");
  } else {
    res.statusCode = 404; //Not Found
    res.end("404 - Page Not Found");
  }
}); //Send response body
//Define port
const PORT = 3000;
//Start server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log("Press CTRL+C to stop the server");

});
