import express from 'express';
//Initialize the express app
const app = express();

//Basic route
//GET - Get data
//POST - Send data
//PUT/PATCH - Update data
//DELETE - Delete data
app.get('/', (_req, res) => {
  res.send('Hello World!');
});

//About route
app.get('/about', (_req, res) => {
  res.send('About Us page.');
});

//Contact route
app.get('/contact', (_req, res) => {
  res.send('This is the contact page.');
});

//Register route
app.post('/register', (_req, res) => {
  res.send('User registration successful.');
});


//Start the server
app.listen(3000, () => console.log('Server is running on port http://localhost:3000'));
