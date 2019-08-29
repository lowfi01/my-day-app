var { Activity } = require('../schema/ActivitySchema');

var addActivity = (req, res) => {

  console.log('req.body' + req.body.energy);
  var activity = new Activity({
    activity: req.body.activity,
    description: req.body.description,
    mood: req.body.mood,
    date: req.body.date,
    energy: req.body.energy
  });

  activity.save().then((doc) => {
    console.log("Successfully stored activity: " + doc);
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
}

module.exports = {
  addActivity
}