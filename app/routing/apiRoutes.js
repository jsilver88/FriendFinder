let path = require("path");

let friendsMatch = require("../data/friends");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsMatch);
  });

  app.post("/api/friends", function (req, res) {
    let newUser = req.body;
    let friendMatch;
    let difference = 100;
    for (let i in friendsMatch) {
      let diff = 0;
      for (let j in friendsMatch[i].score) {
        diff += Math.abs(newUser.score[j] - friendsMatch[i].score[k]);
      }
      if (diff < difference) {
        difference = diff;
        friendMatch = friendsMatch[i];
      }
    }
    friendsMatch.push(newUser);
    res.json(friendMatch);
  });
};
