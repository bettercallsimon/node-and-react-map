/**
 * Criminal server
 */

//  import dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/index'); //is index necessary?

//  config vars & setup
const port = process.env.PORT || 1989; //default = 1989

//  use the built react files for statics via the default '/' root url
app.use(express.static(__dirname + '/public/build'));

//  takes every raw requests and turn them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//  send traffic to the route/index.js file where express.Router() handle every requests
// useless comment
app.use('/', routes);

//  a very basic way to start to listen, could be upgraded
app.listen(port);
console.log(`CRIMINAL SERVER V.1.0.0 RUNNING ON PORT: ${port}`);