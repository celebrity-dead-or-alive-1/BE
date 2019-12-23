const celebRouter = require("express").Router();

const celebDB = require("../data/celeb-model.js");
const restricted = require("../middleware/authenticate-middleware.js");

celebRouter.get("/", (req, res) => {
  celebDB.getAll()
    .then(celeb => {
      res.json(celeb);
    })
    .catch(err => res.send(err));
});

celebRouter.get("/:id", (req, res) => {
  celebDB.getById()
    .then(celeb => {
      res.json(celeb);
    })
    .catch(err => res.send(err));
});

celebRouter.post("/", (req, res) => {
  celebDB.find()
    .then(celeb => {
      res.json(celeb);
    })
    .catch(err => res.send(err));
});

celebRouter.put("/", (req, res) => {
  celebDB.find()
    .then(celeb => {
      res.json(celeb);
    })
    .catch(err => res.send(err));
});

celebRouter.delete("/", (req, res) => {
  celebDB.find()
    .then(celeb => {
      res.json(celeb);
    })
    .catch(err => res.send(err));
});

module.exports = celebRouter;
