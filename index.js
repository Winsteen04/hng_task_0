const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/info", (req, res) => {
    const response = {
        email: "winstonubong@gmail.com"
      "current_datetime" :"2025-01-31T09: 30;00Z
     "github_url: "https://github.com/Winsteen04/hng_task_0"
    };

    res.json(response);
});
