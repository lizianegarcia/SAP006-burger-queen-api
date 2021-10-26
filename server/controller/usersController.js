const { Users }= require('../db/models');

//ok
const getAllUsers = (req, res) => {
  Users.findAll({
  //   attributes: {
  //   exclude: "password"
  // }
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
const getUserById = (req, res) => {
  Users.findByPk(req.params.uid, {
    attributes: {
    exclude: "password"
  }
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

  //ok
  const postUser = (req, res) => {
    const { name, email, password, role, restaurant } = req.body;
    Users.create({
      name,
      email,
      password,
      role,
      restaurant
    })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) =>
        res.status(400).json({
          code: 400,
          error: error.message
        })
      );
  };

  //ok
  const putUser = (req, res) => {
    const { name, email, password, role, restaurant } = req.body;
    Users.update(
      {
        name,
        email,
        password,
        role, 
        restaurant
      },
      {
        where: {
          id: req.params.uid,
        },
      }
    )
      .then(() => {
        res.status(200).json({
          message: 'Updated successfully!',
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
  const deleteUser = (req, res) => {
    Users.destroy({
      where: {
        id: req.params.uid,
      },
    })
      .then(() => {
        res.status(200).json({
          message: 'User successfully deleted :)',
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
  getAllUsers, 
  getUserById, 
  postUser, 
  putUser, 
  deleteUser 
};