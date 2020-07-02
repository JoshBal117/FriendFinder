//Requirements
// const path = require('path');
const friends = require('../data/friends.js');

// API Routes
module.exports = function (app) {
    //Get friends data
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });
    //Add new friend
    app.post('/api/friends', function(req, res) {
        let appAnswers = (req.body).scores;
        // console.log('req.body: ' + req.body);
        //Matching
        let friendName = '';
        let friendPhoto = '';
        let difference = 100;

        for (let i=0; i < friends.length; i++) {
            let temp = 0;

            for (let j = 0; j < appAnswers.length; j++) {
                temp += Math.abs(friends[i].scores[j] - appAnswers[j]);
            }
            
            if(temp < difference) {
                difference = temp;
                friendName = friends[i].name;
                friendPhoto = friends[i].photo;
                // console.log('Match found!');
            }
            
            // console.log(friendName);
            // console.log(friendPhoto);
        }
        friends.push(req.body);
        res.json({status: true, name: friendName, photo: friendPhoto});
    });
};