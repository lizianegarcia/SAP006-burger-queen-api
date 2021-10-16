const { Users }= require('../db/models');

//ok
const getAllUsers = (req, res, next) => {
  Users.findAll({
    attributes: {
    exclude: "password"
  }
})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(next);
};

//ok
const getUserById = (req, res, next) => {
  Users.findByPk(req.params.uid, {
    attributes: {
    exclude: "password"
  }
})
  .then((result) => {
    res.status(200).json(result);
  })
  .catch(next);
  }

  //ok
  const postUser = (req, res, next) => {
    const { name, email, password, role } = req.body;
    Users.create({
      name,
      email,
      password,
      role
    })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(next);
  };

  //ok
  const putUser = (req, res, next) => {
    const { name, email, password, role } = req.body;
    Users.update(
      {
        name,
        email,
        password,
        role,
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
      .catch(next);
  };

  //ok
  const deleteUser = (req, res, next) => {
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
      .catch(next);
  };

module.exports = { 
  getAllUsers, 
  getUserById, 
  postUser, 
  putUser, 
  deleteUser 
};