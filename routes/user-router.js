const userRouter = require("express").Router();
const bcrypt = require("bcryptjs");
const userDB = require("../data/user-model.js");


userRouter.post('/register', (req, res) => {
	let user = req.body;
	const hash = bcrypt.hashSync(user.password, 9); // 2^n
	user.password = hash;
	userDB.add(user)
		.then(newUser => {
			res.status(201).json(newUser);
		})
		.catch(err => res.send(err));
});


module.exports = userRouter;

