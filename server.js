const express = require("express");
const path = require("path");

const app = express();

// Set up view engine to render EJS templates
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Define routes for the homepage and about page
app.get("/", (req, res) => {
  res.render("index", {
    title: "Homepage",
    message: "This is the homepage",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    message: "This is the about page",
  });
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
