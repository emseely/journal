const express = require("express");
const path = require("path");
const volleyball = require("volleyball");

const app = express();

//logging middleware

//body parsing mware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static mware
app.use(express.static(path.join(__dirname, "../public")));

//routes
app.use("/api", require("./api"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//error handling mware
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

module.exports = app;
