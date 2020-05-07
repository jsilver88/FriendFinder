let path = require("path");

let friendsMatch = require("../data/friends");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsMatch);
  });

  app.post("/api/friends", function (req, res) {
    let newUser = req.body;
    let userScore = req.body.scores;
    console.log(userScore);
    let friendMatch = "";
    let friendImg = "";
    let difference = 100;
    for (let i in friendsMatch) {
      let diff = 0;
      for (var j in userScore) {
        diff += Math.abs(
          parseInt(userScore[j]) - parseInt(friendsMatch[i].scores[j])
        );
      }
      if (diff < difference) {
        diff = difference;
        friendMatch = friendsMatch[i].name;
        friendImg = friendsMatch[i].photo;
      }
    }
    friendsMatch.push(newUser);
    res.json({ friend: friendMatch, image: friendImg });
  });
};
