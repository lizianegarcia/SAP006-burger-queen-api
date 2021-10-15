const Users = require('../db/models/users');

module.exports = {
  async getAllUsers(req, res) {
    const allUsers = await Users.findAll({
      attributes: { exclude: 'password' }
    })
    if (allUsers.length === 0) {
      return res.status(400).json({
        code: 400,
        message: 'There are no registered users.',
      });
    }
}

}