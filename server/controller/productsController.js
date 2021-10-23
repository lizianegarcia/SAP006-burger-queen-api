const  { Products } = require('../db/models');

//ok
const getAllProducts = (req, res) => {
  Products.findAll()
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
const getProductById = (req, res) => {
  Products.findByPk(req.params.productId)
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
const postProduct = (req, res) => {
  const { name, flavor, complement, price, image, type, subtype } = req.body;
  Products.create({
      name,
      flavor,
      complement,
      price,
      image,
      type,
      subtype
  })
  .then((result) => {
    res.status(201).send(result);
  })
  .catch((error) =>
        res.status(400).json({
          code: 400,
          error: error.message
        })
      );
};

//ok
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
        id: req.params.productId,
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
const deleteProduct = (req, res) => {
  Products.destroy({
    where: {
      id: req.params.productId,
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
  getAllProducts,
  getProductById,
  postProduct,
  putProduct,
  deleteProduct,
};