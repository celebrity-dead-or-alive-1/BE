const userRouter = require("express").Router();
const bcrypt = require("bcryptjs");
const userDB = require("../data/user-model.js");
const restricted = require("../middleware/authenticate-middleware.js");


userRouter.post('/score', restricted, (req, res) => {
// userRouter.post('/score', (req, res) => {
	let score = req.body;
	clg(score);
	userDB.setOneUserScore(score)
		.then(set => {
			res.status(set.status).json( set.msg );
		})
		.catch(err => res.status(500).send(err));
});

userRouter.get("/score/:id", restricted, (req, res) => {
	userDB.getAllScoresForUser(req.params.id)
	.then(scores => {
		res.json(scores);
	})
	.catch(err => res.status(404).json({
		msg: `id ${req.params.id} doesn't exist.`,
		err: err
	}))
});

userRouter.get("/topten", (req, res) => {
	userDB.getTopTen()
	.then(scores => {
		res.json(scores);
	})
	.catch(err => res.json({err: err}))
});

userRouter.get('*', (req, res) => {
	res.status(404).json("Not Found.");
});


module.exports = userRouter;

function clg(...x) { console.log(...x) };