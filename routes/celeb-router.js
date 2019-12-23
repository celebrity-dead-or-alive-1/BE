const celebRouter = require("express").Router();

const celebDB = require("../data/celeb-model.js");
const restricted = require("../middleware/authenticate-middleware.js");

celebRouter.get("/", (req, res) => {
	celebDB.getAll()
		.then(celeb => {
			res.json(celeb);
		})
		.catch(err => res.json({ err: err }));
});

celebRouter.get("/:id", (req, res) => {
	celebDB.getById(req.params.id)
		.then(celeb => {
			res.json(celeb);
		})
		.catch(err => res.json({ err: err }))
});

celebRouter.post("/", (req, res) => {
	celebDB.add(req.body)
		.then(celeb => {
			res.json(celeb);
		})
		.catch(err => res.json({ err: err }));
});

celebRouter.put("/", (req, res) => {
	clg("32", req.body);

	celebDB.change(req.body)
		.then(celeb => {
			res.json(celeb);
		})
		.catch(err => res.json({ err: err }));
});

celebRouter.delete("/:id", (req, res) => {
	celebDB.remove(req.params.id)
		.then(celeb => {
			res.json(celeb);
		})
		.catch(err => res.json({ err: err }));
});

module.exports = celebRouter;


function clg(...x) { console.log(...x) }
