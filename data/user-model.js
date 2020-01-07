const db = require('./dbConfig.js');

module.exports = {
	add,
	getAll,
	getBy,
	getById,

	/* getAllScores, */
	setOneUserScore,
	getAllScoresForUser,
	getTopTen
};

// #region user db functions

async function add(user) {
	// sends info, gets id back
	// id is destructured from an array?

	clg(14, user)
	if (user.username && user.password && user.email) {
		const [id] = await db('users').insert(user);
		clg(17, id)

		return getById(id);
	} else {
		return ({ err: "Incomplete registration info. Check that all fields are sent." })
	}
}

function getAll() {
	return db('users');
}

function getBy(filter) {
	return db('users').where(filter);
}

function getById(id) {
	return db('users')
		.where({ id })
		.first();
}

// #endregion

async function setOneUserScore(data) {
	clg(48, data);
	if (data.score && data.user_id && data.time) {
		const [score] = await db('scores').insert(data);
		return ({ status: 201, msg: score });
	} else {
		return ({ status: 418, msg: "Incomplete SCORE data. Check that all fields are sent." })
	}
}

function getAllScoresForUser(user_id) {
	return db("scores").where({ user_id })
}

function getTopTen() {
	/* 
	SELECT score, time, users.username FROM scores
	JOIN users on scores.user_id = users.id
	ORDER BY score DESC LIMIT 3;
	 */
	// return db("scores").orderBy('score', 'desc').limit(3);

	return db("scores")
	.select("score", "time", "users.username")
	.join("users", "scores.user_id", "users.id")
	.orderBy('score', 'desc').limit(3);
}

function clg(...x) { console.log(...x) };