const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to log requests
app.use((req, _res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
// Sample route
app.get('/', (_req, res) => {
  res.send('Welcome to the Home Page!');
});


app.get("/about", (_req, res) => {
  res.send("About Page");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
