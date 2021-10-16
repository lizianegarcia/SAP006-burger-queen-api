const {  Products } = require("../db/models");

const getAllProducts = (req, res) => {
  Products.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      res.json({
        message: "ERROR! Try again!",
      })
    );
};

const getProductById = (req, res) => {
  Products.findAll({
    where: {
      id: req.params.id,
    },
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      res.json({
        message: "ERROR! Try again!",
      })
    );
};

const postProduct = (req, res) => {
  const { name, price, flavor, complement, image, type, sub_type } = req.body;
  Products.create({
    name,
    price,
    flavor,
    complement,
    image,
    type,
    sub_type,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() =>
      res.json({
        message: "ERROR! Try again!",
      })
    );
};

const putProduct = (req, res) => {
  const { name, price, flavor, complement, image, type, sub_type } = req.body;
  Products.update(
    {
      name,
      price,
      flavor,
      complement,
      image,
      type,
      sub_type,
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
    .catch(() => {
      res.json({
        message: "ERROR! Try again!",
      });
    });
};

const deleteProduct = (req, res) => {
  Products.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({
        message: "Successfully deleted!",
      });
    })
    .catch(() => {
      res.json({
        message: "ERROR! Try again!",
      });
    });
};

module.exports = {
  getAllProducts,
  getProductById,
  postProduct,
  putProduct,
  deleteProduct,
};