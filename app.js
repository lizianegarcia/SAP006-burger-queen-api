const express = require('express');
const app = express();
const morgan = require('morgan');

const usersRoutes = require('./server/routes/usersRoute');
const productsRoutes = require('./server/routes/productsRoute');
const ordersRoutes = require('./server/routes/ordersRoute');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json()); // json de entrada no body

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Header',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if(req.method === 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE');
    return res.status(200).send({})
  }

  next();
})

app.use('/users', usersRoutes);
app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);

app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === "production")
    res.status(500).json({ error: "internal server error" });
  else return next(err);
});

module.exports = app;