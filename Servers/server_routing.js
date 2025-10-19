const http = require("node:http");
//Create a server
const server = http.createServer((req, res) => {
  // set the content to application/json
  res.setHeader("Content-Type", "application/json");
  //Routing
  if (req.url === "/") {
    res.statusCode = 200; //OK
    res.end(JSON.stringify({ message: "Welcome to the Home Page!" }));
  } else if (req.url === "/about") {
    res.statusCode = 200; //OK
    res.end(JSON.stringify({ message: "This is the About Page." }));
  } else if (req.url === "/contact") {
    res.statusCode = 200; //OK
    res.end(JSON.stringify({ contact: "123-456-7890" }));
  } else {
    res.statusCode = 404; //Not Found
    res.end(JSON.stringify({ error: "404 - Page Not Found" }));
  }
}); //Send response body
//Define port
const PORT = 3000;
//Start server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log("Press CTRL+C to stop the server");

});
