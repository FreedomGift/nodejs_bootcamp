const express = require('express');
//!Initialize express app
const app = express();
const PORT = 3000;

app.get('/', (_req, res) => {
  res.json({ message: 'Hello, World!', author: "Andreas" }, 200);
});
//!Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
