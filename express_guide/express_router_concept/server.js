import express from "express";
import postRoutes from "./routes/postRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const port = 3000;

// Middleware to parse JSON bodies, so we can accept json data in req.body
app.use(express.json());

// Route home
app.get("/", (_req, res) => {
    res.send("Welcome to the Express Router Example!");
});
// Use the posts router for any requests to /posts
app.use("/posts", postRoutes);
// Use the users router for any requests to /users
app.use("/users", userRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
