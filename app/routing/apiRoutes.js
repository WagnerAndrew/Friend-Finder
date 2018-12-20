
var friendsData = require("../data/friends");



module.exports = function(app) {
 
  app.get("/data/friends", function(req, res) {
   res.json(friendsData);
  });
///////////////////////////////////////////////////////////////////////////////////////////////

  app.post("/api/friends", function(req, res) {
    console.log("req.body is: "+ JSON.stringify(req.body));

    var userFriend = req.body;
    var newBestFriend = { 
      name: "", 
      photo: "",
      score: 1000

    }

    for (i=0; i<friendsData.length; i++){

      var currentFriend = friendsData[i];
      var totalDifference = 0;

      for (j=0; j<currentFriend.scores.length; j++){
        var currentFriendScore = currentFriend.scores[j];
        var userFriendScore = userFriend.scores[j];

        console.log("Current Friend score is: " + currentFriendScore + " userFriendScore is: " + userFriendScore);
        
        totalDifference += Math.abs(currentFriendScore - userFriendScore);

        console.log("Total difference is: " + totalDifference);

      }

      console.log("Current friend is: " + JSON.stringify(currentFriend));
      

      if (parseInt(totalDifference) <= newBestFriend.score) {

        newBestFriend.name = currentFriend.name;
        newBestFriend.photo = currentFriend.photo;
        newBestFriend.score = totalDifference;
        console.log("New best friend in the IF: "+ newBestFriend);
        

      }
    }
    console.log("newBestFriend for response is: " + JSON.stringify(newBestFriend));
      friendsData.push(req.body);
      res.json(newBestFriend);
      
  });
///////////////////////////////////////////////////////////////////////////////////////////////

};