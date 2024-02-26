var express = require('express');
var db = require("./config/db");

// connect db
db.connect();

var usersRouter = require('./routes/users');
var blogsRouter = require('./routes/blogs');
var commentsRouter = require('./routes/comments');
var loginRouter = require('./routes/login');
var questionsRouter = require('./routes/questions');

var app = express();

app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000");
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'jwt_token_key, content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});


app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/blogs', blogsRouter);
app.use('/comments', commentsRouter);
app.use('/questions', questionsRouter);

const port = 8080;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
