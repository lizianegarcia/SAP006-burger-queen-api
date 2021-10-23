const { Orders, Products, productOrders } = require('../db/models');

//ok
const getAllOrders = (req, res) => {
  Orders.findAll({
    include: [
      {
        model: Products,
        as: 'Products',
        required: false,
        attributes: [
          'id',
          'name',
          'price',
          'flavor',
          'complement',
          'image',
          'type',
          'sub_type',
        ],
        through: {
          model: productOrders,
          as: 'productOrders',
          attributes: ['qtd'],
        },
      },
    ],
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) =>
      res.status(400).json({
        code: 400,
        error: error.message
      })
    );
};

//ok
const getOrderById = (req, res) => {
  Orders.findAll({
    where: { id: req.params.orderId },
    include: [
      {
        model: Products,
        as: 'Products',
        required: false,
        attributes: [
          'id',
          'name',
          'price',
          'flavor',
          'complement',
          'image',
          'type',
          'sub_type',
        ],
        through: {
          model: productOrders,
          as: 'productOrders',
          attributes: ['qtd'],
        },
      },
    ],
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) =>
      res.status(400).json({
        code: 400,
        error: error.message
      })
    );
}

const postOrders = async (req, res) => {
  const { user_id, client_name, table, status, processedAt } = req.body;
  await Orders.create({
    user_id,
    client_name,
    table,
    status,
    processedAt,
  }).then((result) => {
    req.body.products
      .map((item) => {
        const itemProduct = Products.findByPk(item.id);
        if (!itemProduct) {
          return res.status(400).json({
            message: 'Erro ao buscar produto',
          });
        }

        const itemOrders = {
          order_id: result.id,
          product_id: item.id,
          qtd: item.qtd,
        };

        productOrders.create(itemOrders);

        return res.status(200).json(result);
      })
      .catch((error) =>
        res.status(400).json({
          code: 400,
          error: error.message
        })
      );
  });
};

//ok
const putOrder = (req, res) => {
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
    .catch((error) =>
        res.status(400).json({
          code: 400,
          error: error.message
        })
      );
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
    .catch((error) =>
        res.status(400).json({
          code: 400,
          error: error.message
        })
      );
};

module.exports = {
  getAllOrders,
  getOrderById,
  postOrders,
  putOrder,
  deleteOrder,
};