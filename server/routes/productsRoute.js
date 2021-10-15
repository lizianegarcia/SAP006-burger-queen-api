const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({ message: 'usando GET na rota products' 
  })
})

router.post('/', (req, res) => {
  res.status(201).send({ message: 'usando POST na rota products' 
  })
})

router.get('/:productId', (req, res) => {
  const id = req.params.productid
  res.status(200).send({ message: 'usando GET na rota products id',
  id: id
  })
})

router.put('/:productId', (req, res) => {
  const id = req.params.productid
  res.status(200).send({ message: 'usando PUT na rota products id',
  id: id
  })
})

router.delete('/:productId', (req, res) => {
  const id = req.params.productid
  res.status(201).send({ message: 'usando DELETE na rota products id',
  id: id
  })
})


module.exports = router;