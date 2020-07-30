const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();
const { db } = require("./db");
const bodyParser = require("body-parser");

//logging middleware
app.use(morgan("dev"));

//body parsing mware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api", require("./api"));

//static mware
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

//error handling mware
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

const PORT = process.env.PORT || 3030;

async function startServer() {
  try {
    await db.sync();
    app.listen(PORT, () => {
      console.log(`Journaling on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}
startServer();

module.exports = app;
