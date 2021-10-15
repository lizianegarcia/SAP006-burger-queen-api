const getAllOrders = (req, res) => {
  res.status(200).send({ message: 'usando GET na rota order' 
  })
}

const getOrderById = (req, res) => {
  const id = req.params.orderId
  res.status(200).send({ message: 'usando GET na rota order id',
  id: id
  })
}

const postOrders = (req, res) => {
  res.status(201).send({ message: 'usando POST na rota order' 
 })
}


const putOrder = (req, res) => {
  const id = req.params.orderId
  res.status(200).send({ message: 'usando PUT na rota order id',
  id: id
  })
}

const deleteOrder = (req, res, next) => {
  const id = req.params.orderId
  res.status(201).send({ message: 'usando DELETE na rota order id',
  id: id
  })
}

module.exports = {
  getAllOrders,
  getOrderById,
  postOrders,
  putOrder,
  deleteOrder,
};