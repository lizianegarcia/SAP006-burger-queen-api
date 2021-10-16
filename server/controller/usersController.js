const {  Users } = require("../db/models");

//VIEW ALL USERS
const getAllUsers = (req, res) => {
  Users.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() =>
      res.json({
        message: 'ERROR! Try again!',
      })
    );
};

//VIEW USER BY ID
const getUserById = (req, res) => {
  Users.findAll({
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


//INSERT USER
const postUser = (req, res) => {
  const { name, email, password, role } = req.body;
  Users.create({
    name,
    email,
    password,
    role,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() =>
      res.json({
        message: 'ERROR! Try again!',
      })
    );
};

//CHANGES THE DATA
const putUser = (req, res) => {
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
        id: req.params.id,
      },
    }
  )
    .then(() => {
      res.status(200).json({
        message: 'Updated successfully!',
      });
    })
    .catch(() => {
      res.json({
        message: 'ERROR! Try again!',
      });
    });
};

//DELETE USER
const deleteUser = (req, res) => {
  Users.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({
        message: 'User successfully deleted :)',
      });
    })
    .catch(() => {
      res.json({
        message: 'ERROR! Try again!',
      });
    });
};

module.exports = { getAllUsers, getUserById, postUser, putUser, deleteUser };