const express = require("express");

const app = express();
const PORT = 8081;

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Piyush Kumar"
    });
});


app.all("*", (req, res) => {
    res.status(500).json({
        error: "Route not found"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
