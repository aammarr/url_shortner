const express = require('express');
const app = express();
const CoinRouter = express.Router();

// mongo db
// const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/expressdemo');



//routes

CoinRouter.route('/').get(function (req, res) {
  res.render('index');
});

CoinRouter.route('/create').get(function (req, res) {
  res.render('coin/create');
});

//body parser
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());


module.exports = CoinRouter;