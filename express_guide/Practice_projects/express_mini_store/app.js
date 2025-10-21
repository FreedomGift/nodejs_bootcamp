import express from 'express';

const app = express();

// Sample data
const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1200 },
  { id: 2, name: 'Keyboard', category: 'Electronics', price: 100 },
  { id: 3, name: 'T-Shirt', category: 'Apparel', price: 25 },
  { id: 4, name: 'Jeans', category: 'Apparel', price: 75 },
];

//---ROUTE HERE ---
//! Home ROUTE
app.get("/", (_req, res)=>{
  res.send("Welcome to my Mini Express Store");
});

//! ProductsRoute
app.get("/products", (_req, res)=>{
  res.json(products);
});

//! About Route
app.get("/about", (_req, res) => {
  res.send("This our story company: We sell the quality products");
});

app.get("/contact", (_req, res) => {
  res.send("Please always be in touch with our products, don't hesitate to contact us at masyntech@pxdmail.com");
});

// Route parameters
app.get("/products/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);
  const product = products.find(p => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

//! Query string
app.get("/product/search", (req, res)=>{
  const { category, name } = req.query;
  let filteredProducts = [...products];

  if (category) {
    filteredProducts = filteredProducts.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  if (name) {
    filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
  }
  
  res.json(filteredProducts);
});

// 404 Handler
app.use((_req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3000, ()=>{
  console.log("Server is up and running at http://localhost:3000");
})