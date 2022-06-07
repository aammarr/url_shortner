const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser =  require("body-parser");
const session = require('express-session');

const dotenv = require("dotenv");
dotenv.config();

const passport = require("passport");
const { loginCheck } = require("./auth/passport");
loginCheck(passport);

//body-parser config;
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());


// Mongo DB conncetion
const database = process.env.MONGOLAB_URI;
mongoose
  .connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

// setting view engine
app.set("view engine", "ejs");

//BodyParsing
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret:'oneboy',
    saveUninitialized: true,
    resave: true
  }));
  
// passport
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use("/", require("./routes/login"));
app.use("/api/v1/", require("./routes/article.routes"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log("Server has started at port " + PORT));