import express from 'express';

const app = express();
//---ROUTE HERE ---
//! Home ROUTE
app.get("/", (_req, res)=>{
  res.send("Welcome to my Mini Express Store");
});
//! ProductsRoute
app.get("/products", (_req, res)=>{
  res.send("Here are our amazing products");
});
//! About Route
app.get("/about", (_req, res)=>{
  res.send("This our story company: We sell the quality products");
}
);
app.get("/contact",(_eq, res) =>{
  res.send("Please always be in touch with our products, don't hasitate to contact us at masyntech@pxdmail.com");
}
);


app.listen(3000, ()=>{
  console.log("Server is up and running at http://localhost:3000");

})
