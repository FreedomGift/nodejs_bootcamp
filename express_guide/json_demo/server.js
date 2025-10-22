const express = require('express');
//!Initialize express app
const app = express();
const PORT = 3000;
//Sending JSON data as response
app.get('/', (_req, res) => {
  res.json({ message: 'Hello, World!', author: "Andreas" }, 200);
});
//Making POST request
//req.body contain the data sent by client is sending to server for processing
 //pass inconming request body to book variable
 app.use(express.json());
app.post("/books", (req, res) => {

  res.json(
    {
      message: "Book added succesfully ", data: req.body
    }
  );
} );

//!Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
