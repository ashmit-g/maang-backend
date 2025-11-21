const express = require("express");
const app = express();
const cors = require("cors");

// CORS Setup - FULLY FIXED
app.use(
  cors({
    origin: "*", // not ["*"]
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middlewares
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Maang Backend Running...");
});

app.use("/api/email", require("./routes/emailRoutes"));

module.exports = app;
