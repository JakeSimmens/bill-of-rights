const {EMAIL_USERNAME, EMAIL_PASSWORD, SESSION_SECRET} = require("./config.js");

const express    = require("express");
const app        = express();
const bodyParser = require("body-parser");
//const nodemailer = require("nodemailer");
//const favicon    = require("serve-favicon");
const session    = require("express-session");
const flash      = require("connect-flash");

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
  req.flash("info","Your answer was submitted.");
  res.redirect('/');
});

const port = process.env.PORT || 3000;
app.server = app.listen(port, function startServer() {
    console.log("portfolio server running");
});