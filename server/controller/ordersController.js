const {  Orders } = require("../db/models");

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

const getOrderById = (req, res) => {
  Orders.findAll({
    where: {
      id: req.params.id,
    },
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      res.json({
        message:'ERROR! Try again!',
      })
    );
};


const postOrders = (req, res) => {
  res.status(201).send({ message: 'usando POST na rota order' 
 })
}
//seguir aqui 

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
        id: req.params.id,
      },
    }
  )
    .then(() => {
      res.status(200).json({
        message: "Updated successfully!",
      });
    })
    .catch(() =>
      res.status(400).json({
        message: "ERROR! Try again!",
      })
    );
};

const deleteOrder = (req, res) => {
  Orders.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({
        message: "Successfully deleted!",
      });
    })
    .catch(() =>
      res.status(400).json({
        message: "ERROR! Try again!",
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