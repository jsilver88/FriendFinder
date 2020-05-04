const express = require("express");
let path = require("path");

const app = express();
let PORT = process.env.PORT || 3000;

// Sets up express app to handle data parsing
app.use(express.static(path.join(__dirname, "./app/public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
