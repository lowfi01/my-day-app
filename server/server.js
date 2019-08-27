// #TODO
// - Add mongodb connection
// - Add Mongoose connection
// - Add Mongoose schemas
// - Add API route, Add activity 1.
// - Add API route, Edit activity 2.
// - Add API route, remove activity 3.

const express = require('express');
const path = require('path');

const {mongoose} = require('./mongoose');

const app = express();

app.use(express.static(path.join(__dirname,'../' , 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(publicPath, '../' , 'build', 'index.html'))
});

app.listen(8080, () => {
  console.log("Local host live on 8080");
});