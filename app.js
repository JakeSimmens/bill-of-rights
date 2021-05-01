const {EMAIL_USERNAME, EMAIL_PASSWORD, SESSION_SECRET} = require("./config.js");

const express    = require("express");
const app        = express();
const bodyParser = require("body-parser");
//const nodemailer = require("nodemailer");
//const favicon    = require("serve-favicon");
const session    = require("express-session");
const flash      = require("connect-flash");
const { compareStrings } = require("./wordCheck.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
//app.use(favicon(__dirname + "/public/images/favicon.ico"));
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(flash());


app.get('/', (req, res) => {
    res.render("index", {
      messages: req.flash("info"),
      contactMessage: ""
    });
});

app.post('/', (req, res) => {
  let firstAmendment = "Congress shall make no law respecting an establishment of religion, or prohibiting the free excercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assembly, and to petition the Government for a redress of grievances.";
  let result = compareStrings(req.body.userGuess, firstAmendment);
  if(result.isMatch){
    req.flash("info", "Way to go!!! You got the amendment correct");
  } else {
    req.flash("info", `Close one. Here is the first part you matched correctly: ${result.stringMatch}`);
    req.flash("info", `Here is the remaining portions that contained an error: ${result.unmatchedFirst}`);
  }
  res.redirect('/');
});

const port = process.env.PORT || 3000;
app.server = app.listen(port, function startServer() {
    console.log("portfolio server running");
});

module.exports = app;