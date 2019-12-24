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

celebRouter.get("/count", (req, res) => {
	celebDB.count()
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
		.catch(err => res.status(404).json({ msg: `id ${req.params.id} doesn't exist.` }))
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

celebRouter.delete("/del/:id", (req, res) => {
	celebDB.remove(req.params.id)
		.then(celeb => {
			res.json(celeb);
		})
		.catch(err => res.json({ err: err }));
});

module.exports = celebRouter;


function clg(...x) { console.log(...x) }
