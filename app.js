const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());


// Middlewares
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Maang Backend Running...");
});

app.use("/api/email", require("./routes/emailRoutes"));

module.exports = app;   
