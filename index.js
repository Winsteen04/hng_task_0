const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Root route for API information
app.get("/", (req, res) => {
    res.send("Welcome to my API! Visit /api/info for details.");
});

// Main API route
app.get("/api/info", (req, res) => {
    res.json({
        email: "winstonubong@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/Winsteen04/hng_task_0"
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
