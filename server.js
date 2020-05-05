const express = require("express");
let path = require("path");
let bodyParser = require("body-parser");

let app = express();
let PORT = process.env.PORT || 3000;

// Sets up express app to handle data parsing
app.use(express.static(path.join(__dirname, "./app/public")));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.text());

require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
