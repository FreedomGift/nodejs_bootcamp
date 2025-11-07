import express from 'express';
import path from 'node:path';
import process from "node:process";

const app = express();
// Serve static files from the 'public' directory
app.use(express.static(path.join(process.cwd(), 'public')));
// !Handle root route
app.get('/', (_req, res) => {
  res.sendFile(path.join(process.cwd(), 'views', 'index.html'));
});
// !Handle about route
app.get('/about', (_req, res) => {
  res.sendFile(path.join(process.cwd(), 'views', 'about.html'));
});
// !Handle contact route
app.get('/contact', (_req, res) => {
  res.sendFile(path.join(process.cwd(), 'views', 'contact.html'));
});
// !Set the port
const PORT = process.env.PORT || 3000;

//! Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
