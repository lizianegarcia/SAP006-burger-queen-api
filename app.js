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

app.use((req, res, next) => {
  const erro = new Error('Não encontrado');
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      mensagem: error.message
    }
  })
});

module.exports = app;