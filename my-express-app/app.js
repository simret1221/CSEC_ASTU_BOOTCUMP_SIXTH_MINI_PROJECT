const express = require("express");
const mainRoutes = require("./routes/mainRoutes");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use routes
app.use("/", mainRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});
