var mongoose = require('mongoose');

var Activity = mongoose.model('Activity', {
  activity: {
    type: String,
    required: [ true, 'Activity is required ' ],
    trim: true
  },
  description: {
    type: String,
    required: [ true, 'description is required ' ],
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
  pain: {
    type: String,
    required: [ true, 'Pain input is required ' ]
  },
  clarity: {
    type: String,
    required: [ true, 'Clarity input is required ' ]
  },
  date: {
    type: String,
    required: [ true, 'Date is required ' ]
  }
})

module.exports = {
  Activity
}