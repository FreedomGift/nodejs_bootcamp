import express from "express";
import data from "../data.js";

const router = express.Router();

// All routes here are relative to /users

//GET /users
router.get("/", (_req, res) => {
    res.json(data.users);
});

// GET /users/:id
router.get("/:id", (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = data.users.find(u => u.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

// POST /users
router.post("/", (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.status(400).json({ message: "Username is required" });
    }
    const newId = data.users.length > 0 ? Math.max(...data.users.map(u => u.id)) + 1 : 1;
    const newUser = {
        id: newId,
        username: username
    };
    data.users.push(newUser);
    res.status(201).json(newUser);
});

// PUT /users/:id
router.put("/:id", (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const { username } = req.body;
    const userIndex = data.users.findIndex(u => u.id === userId);

    if (userIndex !== -1) {
        if (!username) {
            return res.status(400).json({ message: "Username is required" });
        }
        data.users[userIndex].username = username;
        res.json(data.users[userIndex]);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

// DELETE /users/:id
router.delete("/:id", (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const userIndex = data.users.findIndex(u => u.id === userId);

    if (userIndex !== -1) {
        data.users.splice(userIndex, 1);
        res.json({ message: "User deleted successfully" });
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

// Export router at the end
export default router;
