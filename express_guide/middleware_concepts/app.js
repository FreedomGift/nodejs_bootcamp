const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();
const port = 3000;

// Type of middleware
// ---------------------------------
// 1. Built-in Middleware
// 2. Third-party Middleware
// 3. Custom Middleware
// 4. Application-level Middleware
// Built-in Middleware
app.use(express.json()); // Built-in middleware to parse JSON bodies
app.use(express.static('public')); // Built-in middleware to serve static files
// Third-party Middleware
app.use(logger('dev')); // Third-party middleware for logging
app.use(cors()); // Third-party middleware to enable CORS

// Custom middleware to add request time
app.use((req, _res, next) => {
  console.log(`Custom Logger : ${req.method} - ${req.url}`);
  req.requestTime = new Date();
  next();
});
// Application-level Middleware
app.get('/admin', (_req, _res, _next) => {
  console.log("Checking Admin Access");
  // You could add authentication logic here
  _next();

}, (_req, _res) => {
  _res.json({ message: "Welcome to the Admin Page!" });
})
// Router Level Middleware
const userRouter = express.Router();
userRouter.use((_req, _res, _next) => {
  console.log("User router middleware called");
  _next();
})
userRouter.get('/profile', (_req, res, next) => {
  res.json({message: 'User Profile'});
  next();
});
app.get('/about', (_req, res) => {
  console.log("Request Time:", _req.requestTime);
  res.json({ message: "Welcome to the About Page!" });
} );
app.use('/', userRouter);
// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
