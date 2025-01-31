const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

app.get("/api/info", (req, res) => {
    const response = {
        email: "winstonubong@gmail.com",
        current_datetime: new Date().toISOString(), 
        github_url: "https://github.com/Winsteen04/hng_task_0"
    };

    res.json(response);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
