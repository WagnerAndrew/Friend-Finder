
var path = require("path");

module.exports = function(app) {


  /////////////////////////////////////////////////////////////////////////////////////////

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  /////////////////////////////////////////////////////////////////////////////////////////

  app.get("/data/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "../data/friends.html"));
  });

  /////////////////////////////////////////////////////////////////////////////////////////
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });





//Module Exports Ends  
};
