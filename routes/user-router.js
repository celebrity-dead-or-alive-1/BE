const userRouter = require("express").Router();
const bcrypt = require("bcryptjs");
const userDB = require("../data/user-model.js");
const restricted = require("../middleware/authenticate-middleware.js");


// userRouter.post('/score', /* restricted,  */(req, res) => {
userRouter.post('/score', (req, res) => {
	let score = req.body;
	clg(score);
	userDB.setOneUserScore(score)
		.then(set => {
			res.status(201).json({ message: set });
		})
		.catch(err => res.send(err));
	// res.status(200).json("OK");
});

userRouter.get("/score/:id", (req, res) => {
	userDB.getAllScoresForUser(req.params.id)
		.then(scores => {
			res.json(scores);
		})
		.catch(err => res.status(404).json({
			msg: `id ${req.params.id} doesn't exist.`,
			err: err
		}))
});


module.exports = userRouter;

function clg(...x) { console.log(...x) };