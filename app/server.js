const express = require("express");
const app = express();
const PORT = 3000;

// Root route with HTML styling
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Welcome</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f9f9f9;
          }
          h1 {
            font-size: 40px;
            color: #222;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <h1>🚀 Welcome! This app is running through a CI/CD pipeline with Docker and GitHub Actions.</h1>
      </body>
    </html>
  `);
});

// Health check route
app.get("/health", (req, res) => {
  res.send("OK");
});

// Only start the server if this file is run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is live at http://localhost:${PORT}`);
  });
}

module.exports = app; // ✅ Export app for testing

