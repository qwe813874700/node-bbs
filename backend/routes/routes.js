module.exports = (app) => {
  app.use('/', require('./index'))
  app.use('/users', require('./users'))
}