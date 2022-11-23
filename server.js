require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

app.use((req, res, next) => {
  console.log("Time: ", new Date());
  next();
});

app.get("/", (req, res) => {
  res.send("Successful response.");
});

app.listen(PORT, () =>
  console.log(`Example app is listening on port ${PORT}.`)
);
