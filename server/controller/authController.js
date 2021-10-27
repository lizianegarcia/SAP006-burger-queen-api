const jwt = require("jsonwebtoken");
const { Bearer } = require("permit");
const bcrypt = require('bcrypt');
const database = require('../db/models');
const { Users } = database;
const permit = new Bearer();

module.exports = {
  login(req, res) {
    const { email, password } = req.body;

    Users.findOne({
      where: {
        email: email
      },
    })
    .then((user) => {
      if (!user) return res.status(401).json({ error: "email not found" });
      // if (!bcrypt.compareSync(password, user.password)) {
      //   return res.status(401).json({ error: "invalid password" });
      // }

      let jwtPayload = { id: user.id };
      let token = jwt.sign(jwtPayload, process.env.JWT_SECRET); 

      return res.status(200).json({ token });
    })
    .catch((error) =>
        res.status(400).json({
          code: 400,
          error: error.message
        })
      );
  },

  auth(req, res, next) {
    const token = permit.check(req);

     if (!token) {
       permit.fail(res);
       return res.status(401).json({ error: "Authentication required!" });
     }
 
     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
       if (err) {
         permit.fail(res);
         return res.status(401).json({ error: "Failed to authenticate token!" });
       }

       req.id = decoded.id;
       next();
     });
}

}