var moment = require('moment');
// import moment from 'moment'

var date = new Date();
var holder = moment();
console.log(date);
console.log(moment(date).format('MMMM Do YYYY, h:mm:ss a'));
