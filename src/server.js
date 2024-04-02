const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my First CRUD app");
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
