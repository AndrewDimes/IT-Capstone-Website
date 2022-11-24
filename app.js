var createError = require('http-errors')
var express = require('express')
var path = require('path')
var logger = require('morgan')
var bodyParser = require('body-parser')
var flash = require('express-flash')
var cookieParser = require('cookie-parser')
var expressValidator = require('express-validator')
var session = require('express-session')
var mysql = require('mysql')
var connection = require('./connection')
//var nodeRoutes = require('./routes/index')
var cartRoute = require('./routes/cart')
var indexRoutes = require('./routes/index');
var methodOverride = require('method-override')


var app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(
  session({
    secret: '123@abcd',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  }),
)
//app.use(expressValidator())
app.use(flash())
app.use("/public", express.static(__dirname + "/views/public"));
app.use(methodOverride('_method'))


//app.use('/', nodeRoutes)
app.use('/cart', cartRoute)
app.use('/', indexRoutes);

app.use(function (req, res, next) {
  next(createError(404))
})
app.listen(process.env.PORT || 3000)
// error
app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.render('error')
})
module.exports = app