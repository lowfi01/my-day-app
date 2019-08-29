// #TODO
// Add logger functionaility to view requests / responses to our express server easier.
// - Test using either morgan or morganBody
// https://stackoverflow.com/questions/51409771/logging-post-body-size-using-morgan-when-request-is-received/51410767
// https://vivia.readthedocs.io/en/latest/node_modules/morgan/README/
// https://www.npmjs.com/package/morgan-body
// https://www.npmjs.com/package/morgan
//
// Create new Branch called - Basic CRUD operations.
// Push Branch to GITHUB
// Merge to Master
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

