import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import process from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files
app.use(express.static('public'));

// Routes
app.get('/', (_req, res) => {
  res.render('home', { title: 'Welcome to Home Page' });
});
app.get('/about', (_req, res) => {
  res.render('about', { title: 'About Page' });
});
app.get('/variables', (_req, res) => {
  res.render('variables', { title: 'EJS Variables Page',
    user:{
      name: 'John Doe',
      age: 30,
      email: "i2EYI@example.com",
      occupation: 'Developer',
      isActive: true
    }
  });
});
app.get('/conditional', (_req, res) => {
  res.render('conditional', { title: 'EJS Conditional Page',
    user:{
      isLoggedIn: true,
      isAdmin: true,
      hasItems: false,
    },
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
