const celebRouter = require("express").Router();

const celebDB = require("../data/celeb-model.js");
const restricted = require("../middleware/authenticate-middleware.js");


/* 
SWITCH COMMENT lines 11/12 for non-destructive testing of 
`restricted` middleware
 */
celebRouter.get("/", (req, res) => {
// celebRouter.get("/", restricted, (req, res) => {
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


/* 
Create, Update, Delete routes
protected for admin-flagged users only
 */

celebRouter.post("/", (req, res) => {
	celebDB.add(req.body)
		.then(celeb => {
			res.json(celeb);
		})
		.catch(err => res.json({ err: err }));
});

celebRouter.put("/", restricted, (req, res) => {
	clg("32", req.body);

	celebDB.change(req.body)
		.then(celeb => {
			res.json(celeb);
		})
		.catch(err => res.json({ err: err }));
});

celebRouter.delete("/del/:id", restricted, (req, res) => {
	celebDB.remove(req.params.id)
		.then(celeb => {
			res.json(celeb);
		})
		.catch(err => res.json({ err: err }));
});

//  #region busted /round route
/* 

// Route doesn't 404, but returns nothing 

celebRouter.get("/round", (req, res) => {
	clg("33")
	res.json("37");
	// length of the game round
	const length = 3;

	// array to check for duplicate ids
	const fullRound = Array(length).fill(0);

	for (let i = 0; i < length; i++) {
		// pick a random number between 1 and `length`
		let e;
		do {e = Math.floor(Math.random() * Math.floor(length)) + 1}
		while (!fullRound.includes(e));
	}
	// res.json({data:"43,length,fullRound"});
	// async const count = await celebDB.count();


	// celebDB.count()
	// 	.then(celeb => {
	// 		res.json(celeb);
	// 	})
	// 	.catch(err => res.json({ err: err }));
});

*/
// #endregion 


module.exports = celebRouter;


function clg(...x) { console.log(...x) }
