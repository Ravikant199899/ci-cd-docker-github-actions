const express = require("express");
const app = express();
const PORT = 3000;

// Existing route
app.get("/", (req, res) => {
  res.send("Welcome! This app is running through a CI/CD pipeline with Docker and GitHub Actions.");
});

// Add the health check route here
app.get("/health", (req, res) => {
  res.send("OK");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is live at http://localhost:${PORT}`);
});

