import express from "express";
import data from "../data.js";

const router = express.Router();

// Routes are relative to /posts

// GET /posts
router.get("/", (_req, res) => {
    res.json(data.posts);
});

// GET /posts/:id
router.get("/:id", (req, res) => {
    res.json({message: `Get post with id ${req.params.id}`});
});

// POST /posts
router.post("/", (_req, res) => {
    res.status(201).json({message: `Post created`});
});

// PUT /posts/:id
router.put("/:id", (req, res) => {
    res.json({message: `Post updated with id ${req.params.id}`});
});

// DELETE /posts/:id
router.delete("/:id", (req, res) => {
    res.json({message: `Post deleted with id ${req.params.id}`});
});

export default router;
