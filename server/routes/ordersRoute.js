const express = require('express');
const router = express.Router();

const models = require('../db/models');
const Order = models.Orders

router.get('/', (req, res, next) => {
  res.status(200).send({ message: 'usando GET na rota order' 
  })
})

router.post('/', (req, res, next) => {
  Order.create(req.body);
    res.send('certo')
  })
  // res.status(201).send({ message: 'usando POST na rota order' 
  // })


router.get('/:orderId', (req, res, next) => {
  const id = req.params.orderId
  res.status(200).send({ message: 'usando GET na rota order id',
  id: id
  })
})

router.put('/:orderId', (req, res, next) => {
  const id = req.params.orderId
  res.status(200).send({ message: 'usando PUT na rota order id',
  id: id
  })
})

router.delete('/:orderId', (req, res, next) => {
  const id = req.params.orderId
  res.status(201).send({ message: 'usando DELETE na rota order id',
  id: id
  })
})


module.exports = router;