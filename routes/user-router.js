const userRouter = require("express").Router();

const userDB = require("../data/user-model.js");
const restricted = require("../middleware/authenticate-middleware.js");

userRouter.get("/", (req, res) => {
  userDB.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = userRouter;
