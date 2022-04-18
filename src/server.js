const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.get("/hello-world/", function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/hello-world.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf8");
  res.send(contentFromHtmlFile);
});

app.get("/books/", function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/books.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf8");
  res.send(contentFromHtmlFile);
});
app.use("/static", express.static(path.resolve(__dirname, "../dist")));

// create app listening
app.listen(8000, function () {
  console.log("listening on port 8000");
});
