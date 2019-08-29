var mongoose = require('mongoose');

var Activity = mongoose.model('Activity', {
  activity: {
    type: String,
    required: [ true, 'activity is required ' ],
    trim: true
  },
  description: {
    type: String,
    required: [ true, 'Mood is required ' ],
    trim: true
  },
  mood: {
    type: String,
    required: [ true, 'Mood is required ' ],
    trim: true
  },
  energy: {
    type: String,
    required: [ true, 'Energy input is required ' ]
  },
  date: {
    type: String,
    required: [ true, 'Date is required ' ]
  }
})

module.exports = {
  Activity
}