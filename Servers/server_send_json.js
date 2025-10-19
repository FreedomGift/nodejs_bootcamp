const http = require('node:http');
// Create a server
const server = http.createServer((req, res) => {
  // Set the content to application/json
  res.setHeader('Content-Type', 'application/json');
  if(req.url === '/' && req.method === 'GET') {
    res.statusCode = 200; // OK
    res.end(JSON.stringify({ message: 'Welcome to API!' }));
  } else if (req.url === '/users' && req.method === 'GET') {
    res.statusCode = 200; // OK
    const users = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' }
    ];
    res.end(JSON.stringify({ users }));
  } else if (req.url === '/products' && req.method === 'GET') {
    res.statusCode = 200; // OK
    const products = [
      { id: 101, name: 'Laptop', price: 999.99 },
      { id: 102, name: 'Smartphone', price: 499.99 },
      { id: 103, name: 'Tablet', price: 299.99 }
    ];
    res.end(JSON.stringify({ products }));
  } else {
    res.statusCode = 404; // Not Found
    res.end(JSON.stringify({ error: '404 - Page Not Found' }));
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
