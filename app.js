const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Maang Backend Running...");
});

app.use("/api/email", require("./routes/emailRoutes"));

module.exports = app;
