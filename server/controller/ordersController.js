const { Orders } = require("../db/models");

//ok
const getAllOrders = (req, res) => {
  Orders.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      res.json({
        message: 'ERROR! Try again!',
      })
    );
};

//ok
const getOrderById = (req, res) => {
  Orders.findByPk(req.params.orderId)
  .then((result) => {
    res.status(200).json(result);
  })
  .catch(() =>
    res.status(400).json({
      message: "ERROR! Try again!",
    }))
}

//printa, mas não cria o pedido
const postOrders = (req, res) => {
  const newOrder = {
    client_name: req.body.client_name,
    user_id: req.body.user_id,
    table: req.body.table,
    status: req.body.status,
  }

  // algo mais acontece aqui 
  res.status(201).send(newOrder);
}


//ok
const putOrder = (req, res, next) => {
  const { client_name, user_id, table, status } = req.body;
  Orders.update(
    {
      client_name,
      user_id,
      table,
      status,
    },
    {
      where: {
        id: req.params.orderId,
      },
    }
  )
    .then(() => {
      res.status(200).json({
        message: "Updated successfully!",
      });
    })
    .catch(next);
};

//ok
const deleteOrder = (req, res, next) => {
  Orders.destroy({
    where: {
      id: req.params.orderId,
    },
  })
    .then(() => {
      res.status(200).json({
        message: "Successfully deleted!",
      });
    })
    .catch(next);
};

module.exports = {
  getAllOrders,
  getOrderById,
  postOrders,
  putOrder,
  deleteOrder,
};