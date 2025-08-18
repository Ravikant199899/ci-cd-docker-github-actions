const express = require("express");
const app = express();
const PORT = 3000;

// Route
app.get("/", (req, res) => {
  res.send("Welcome! This app is running through a CI/CD pipeline with Docker and GitHub Actions.");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is live at http://localhost:${PORT}`);
});

