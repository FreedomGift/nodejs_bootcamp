const http = require("node:http");
//Create a server
const server = http.createServer((req, res) => {
  //log request details
  console.log(`Received ${req.method} request for: ${req.url}`);
  //Set status code and headers
  res.writeHead(200, { "Content-Type": "text/plain" });
  //Send response body
  res.end("Hello World!");
}); //Send response body
//Define port
const PORT = 3000;
//Start server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log("Press CTRL+C to stop the server");
  
});
