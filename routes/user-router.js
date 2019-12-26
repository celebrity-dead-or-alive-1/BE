const userRouter = require("express").Router();
const bcrypt = require("bcryptjs");
const userDB = require("../data/user-model.js");
const restricted = require("../middleware/authenticate-middleware.js");


// userRouter.post('/score', /* restricted,  */(req, res) => {
userRouter.post('/score', (req, res) => {
	let score = req.body;
	clg(score);
	// userDB.setOneUserScore(score)
	// 	.then(newUser => {
	// 		res.status(201).json(newUser);
	// 	})
	// 	.catch(err => res.send(err));
	res.status(200).json("OK");
});


module.exports = userRouter;

function clg(...x) { console.log(...x) };