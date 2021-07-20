const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const routes = require('./routes/routes')
const verToken = require('./util/token')
const expressJwt = require('express-jwt')

const app = express();

require('./models');

app.use(verToken.verfiyToken)

//验证token是否过期并规定那些路由不需要验证
// app.use(expressJwt({
//   secret: 'bbs_token',
//   algorithms: ['HS256']
// }).unless({
//   path: ['/users/login', '/users/register'] //不需要验证的接口名称
// }))

app.use(verToken.resultToken)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

routes(app)

app.use(function(req, res, next) {
  res.status(404)
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
