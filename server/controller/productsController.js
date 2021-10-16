const  {Products } = require('../db/models');

//ok
const getAllProducts = (req, res, next) => {
  Products.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(next);
};

//ok
const getProductById = (req, res, next) => {
  Products.findByPk(req.params.productId)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(next);
};

//ok
const postProduct = (req, res, next) => {
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
  .catch(next);
};

//ok
const putProduct = (req, res, next) => {
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
    .catch(next);
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
    .catch(next);
};

module.exports = {
  getAllProducts,
  getProductById,
  postProduct,
  putProduct,
  deleteProduct,
};