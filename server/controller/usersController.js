const database = require("../db/models");

//VIEW ALL USERS
const getAllUsers = (req, res) => {
    res.status(200).send({ message: 'usando GET na rota users' 
    })
  }

//VIEW USER BY ID
const getUserById = (req, res) => {
    const uid = req.params.uid
    res.status(200).send({ message: 'usando GET na rota users uid',
    uid: uid
    })
  }

//INSERT USER
const postUser = (req, res) => {
    res.status(201).send({ message: 'usando POST na rota users' 
    })
  }

//CHANGES THE DATA
const putUser = (req, res) => {
    const uid = req.params.uid
    res.status(200).send({ message: 'usando PUT na rota users uid',
    uid: uid
    })
  }

//DELETE USER
const deleteUser = (req, res) => {
    const uid = req.params.uid
    res.status(201).send({ message: 'usando DELETE na rota users uid',
    uid: uid
    })
  }

module.exports = { getAllUsers, getUserById, postUser, putUser, deleteUser };