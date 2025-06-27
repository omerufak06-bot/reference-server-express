const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
  const headerSignalValue = req.header('Sec-GPC')
  res.render("index", {
    globalPrivacyControlValue: headerSignalValue,
  });
});

// Only listen if not running in a serverless environment
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, function() {
    console.log("Your app is listening on port " + port);
  });
}

module.exports = app;
