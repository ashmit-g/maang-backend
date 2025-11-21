const express = require("express");
const app = express();
const cors = require("cors");

// CORS Setup
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://maangprepacademy.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
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
