const { Users }= require('../db/models');

//ok
const getAllUsers = (req, res) => {
  Users.findAll({
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
    const { name, email, role, restaurant } = req.body;
    const password = req.body.password;

    Users.findOne({
      where: {
        email: email,
      },
    }).then((result) => {
      if (result !== null) {
        return res
          .status(403)
          .json({ code: 403, message: 'Email already in use!' });
      }
      return Users.create({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
        role,
        restaurant,
      })
        .then((result) => {
          res.status(200).json({
            id: result.id,
            name: result.name,
            email: result.email,
            role: result.role,
            restaurant: result.restaurant,
          });
        })
        .catch((err) => {
          return res.status(400).json({ code: 400, message: err.message });
        });
    });
  }

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