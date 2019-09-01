// #TODO
// - MOVE TO GUI - TODO LIST FOUND IN index.js
// ADD AUTH
// Create BRANCH WHEN DEVELOPED
// ADD OAUTH
// CREATE BRANCH WHEN DEVLEOPED

const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const morganBody = require('morgan-body'); // REMOVE IN PRODUCTION BUILD

const {mongoose} = require('./mongoose/Mongoose');
const  { addActivity, getActivity, removeActivity, editActivity } = require('./api/ActivityRoutes');
const  {Activity} = require('./schema/ActivitySchema')

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname,'../' , 'build')));
app.use(bodyParser.json());
// app.use(morgan(':date :method :url :status :res[header] :req[header]  - :response-time ms'));

// REMOVE IN PRODUCTION BUILD
morganBody(app);

// Activity Routes
app.get('/api/activity', getActivity);
app.post('/api/activity', addActivity);
app.delete('/api/activity/:id', removeActivity);
app.put('/api/activity/:id', editActivity);

app.get('*', function (req, res) {
  res.sendFile(path.join(publicPath, '../' , 'build', 'index.html'))
});

app.listen(port, () => {
  console.log(`Local host live on ${port}`);
});

// Issues with proxy using create-react app
//https://stackoverflow.com/questions/52605997/when-specified-proxy-in-package-json-must-be-a-string

// Documentation to allow for express to run with create reate app
// https://dev.to/loujaybee/using-create-react-app-with-express
