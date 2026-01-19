const express = require("express");

const app = express();
const PORT = 8081;

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Home Page 🙂",
  });
});

// Create todo
app.post("/todos", (req, res) => {
  const todo = req.body;

  res.status(201).json({
    message: "Todo created successfully",
    data: todo,
  });
});

// Get all todos
app.get("/todos", (req, res) => {
  res.status(200).json({
    message: "Todos fetched",
    data: [],
  });
});

// Catch-all route (404)
app.all("*", (req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
