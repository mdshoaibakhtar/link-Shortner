var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const DBConnect = require("./config/db");
var logger = require("morgan");
// const hbs = require("hbs");
const port = process.env.PORT || 3000;
const hostname = "127.0.0.1"
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
DBConnect();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
// app.listen(process.env.PORT || 3000, () => {
//   console.log("Server is now running........");
// });

app.listen(port,()=>{
  console.log(`Website Running at http://${hostname}:${port}`)
})

module.exports = app;
