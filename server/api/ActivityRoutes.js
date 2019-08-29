// # Below is examples of promises used with both standard .then() and async / await
const { Activity } = require('../schema/ActivitySchema');

// Async / Await method
const getActivity = async (req, res) => {
  try {
    const activity = await Activity.find();
      //const activity = await Activity.find().exec();  // .exec() should return a promise but newest mongoose now return by default.
    console.log(activity);
    res.send(activity);
  } catch (error) {
    res.status(400).send(err);
  }
}

// Async and await promises v2
const addActivity = async (req, res) => {
  try {
    const activity = await new Activity({
      activity: req.body.activity,
      description: req.body.description,
      mood: req.body.mood,
      date: req.body.date,
      energy: req.body.energy
    }).save();
    console.log(activity);
    res.send(activity)
  } catch (err){
    res.status(400).send(err);
  }
}

module.exports = {
  addActivity, getActivity
}

// Classic .then() promise method
// const getActivity = (req, res) => {
//    console.log("firing")
//     Activity.find()
//     .then((result) => {
//       res.send(result);
//     })
// }

// Async and await promises v1
// const addActivity = async (req, res) => {

//   try {
//     const activity = new Activity({
//       activity: req.body.activity,
//       description: req.body.description,
//       mood: req.body.mood,
//       date: req.body.date,
//       energy: req.body.energy
//     });

//     let saveActivity = await activity.save();
//     console.log(saveActivity);
//     res.send(saveActivity)
//   } catch (err){
//     res.status(400).send(err);
//   }
// }

// // Standard method
// var addActivity = (req, res) => {

//   console.log('req.body' + req.body.energy);
//   var activity = new Activity({
//     activity: req.body.activity,
//     description: req.body.description,
//     mood: req.body.mood,
//     date: req.body.date,
//     energy: req.body.energy
//   });

//   activity.save().then((doc) => {
//     console.log("Successfully stored activity: " + doc);
//     res.send(doc);
//   }, (e) => {
//     res.status(400).send(e);
//   })
// }


