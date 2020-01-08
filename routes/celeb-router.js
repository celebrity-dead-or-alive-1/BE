const celebRouter = require("express").Router();

const celebDB = require("../data/celeb-model.js");
const restricted = require("../middleware/authenticate-middleware.js");


/* 
SWITCH COMMENT lines 11/12 for non-destructive testing of 
`restricted` middleware
 */
celebRouter.get("/", (req, res) => {
	celebDB.getAll()
		.then(celeb => {
			res.json(celeb);
		})
		.catch(err => res.status(500).json({ msg: err }))
});

celebRouter.get("/r", restricted, (req, res) => {
	celebDB.getAll()
		.then(celeb => {
			res.json(celeb);
		})
		.catch(err => res.status(500).json({ msg: err }))
});

celebRouter.get("/count", (req, res) => {
	celebDB.count()
		.then(celeb => {
			res.json(celeb);
		})
		.catch(err => res.status(500).json({ msg: err }))
});

celebRouter.get("/:id", (req, res) => {
	celebDB.getById(req.params.id)
		.then(celeb => {
			res.json(celeb);
		})
		.catch(err => res.status(404).json({ msg: `id ${req.params.id} doesn't exist.` }))
});


/* 
Create, Update, Delete routes
protected for admin-flagged users only
 */

celebRouter.post("/", (req, res) => {
	celebDB.add(req.body)
		.then(celeb => {
			res.status(celeb.status).json( celeb.msg );
		})
		.catch(err => res.status(500).json({ msg: err }))
});

// celebRouter.put("/", restricted, (req, res) => {
celebRouter.put("/", (req, res) => {
	// clg(59, req.body);
	celebDB.change(req.body)
		.then(celeb => {
			res.status(celeb.status).json( celeb );
		})
		.catch(err => res.status(500).json({ msg: err }))
});

celebRouter.delete("/del/:id", (req, res) => {
// celebRouter.delete("/del/:id", restricted, (req, res) => {
	celebDB.remove(req.params.id)
		.then(celeb => {
			res.status(celeb.status).json( celeb );
		})
		.catch(err => res.status(500).json({ msg: err }))
});

module.exports = celebRouter;


function clg(...x) { console.log(...x) }
