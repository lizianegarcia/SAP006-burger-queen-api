const { Orders, Products, productOrders } = require('../db/models');

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
  const { user_id, client_name, table, status, processedAt } = req.body;

   // cria o pedido
   Orders.create({
    user_id,
    client_name,
    table,
    status,
    processedAt
  })
  .then((result) => {
    req.body.products
      .map((item) => {
        const itemProduct = Products.findByPk(item.id);
        if (!itemProduct) {
          return res.status(400).json({
            message: "ERROR! Try again!",
          });
        }

        const itemOrders = {
          order_id: result.id,
          product_id: item.id,
          qtd: item.qtd,
        };

        productOrders.bulkCreate(itemOrders);

        return res.status(200).json(result);
      })
      .catch(() =>
        res.status(400).json({
          message: "ERROR! Try again!",
        })
      );
  });
};

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