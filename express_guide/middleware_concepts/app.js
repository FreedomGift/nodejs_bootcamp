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

// --- ROUTES ---

// Sample route
app.get('/', (_req, res) => {
  res.send('Welcome to the Home Page!');
});

app.get("/about", (_req, res) => {
  res.send("About Page");
});

// Route with parameters
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  // For a real app, you would fetch user data from a database here
  res.send(`User Profile Page for User ID: ${id}`);
});

// POST route to handle data
app.post('/data', (req, res) => {
  const { body } = req;
  console.log('Received data:', body);
  if (!body || Object.keys(body).length === 0) {
    return res.status(400).json({ message: 'No data provided.' });
  }
  res.status(201).json({ message: 'Data received successfully', data: body });
});

// Route to test error handling
app.get('/error', (req, res, next) => {
  // Simulate an error
  const err = new Error('This is a simulated error!');
  err.status = 500;
  next(err);
});

// --- ERROR HANDLING MIDDLEWARE ---

// 404 Not Found Handler
// This middleware is triggered when no other route matches
app.use((req, res, next) => {
  res.status(404).send("Sorry, can't find that!");
});

// General Error Handler
// This middleware is triggered when `next(err)` is called
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
