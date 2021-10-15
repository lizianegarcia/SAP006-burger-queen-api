//VIEW ALL PRODUCTS
const getAllProducts = (req, res) => {
  res.status(200).send({ message: 'usando GET na rota products' 
  })
}

//VIEW PRODUCT BY ID
const getProductById = (req, res) => {
  const id = req.params.productid
  res.status(200).send({ message: 'usando GET na rota products id',
  id: id
  })
}

//INSERT PRODUCT
const postProduct = (req, res) => {
  res.status(201).send({ message: 'usando POST na rota products' 
  })
}

//CHANGES THE DATA
const putProduct = (req, res) => {
  const id = req.params.productid
  res.status(200).send({ message: 'usando PUT na rota products id',
  id: id
  })
}

//DELETE PRODUCT
const deleteProduct = (req, res) => {
  const id = req.params.productid
  res.status(201).send({ message: 'usando DELETE na rota products id',
  id: id
  })
}

module.exports = {
  getAllProducts,
  getProductById,
  postProduct,
  putProduct,
  deleteProduct,
};