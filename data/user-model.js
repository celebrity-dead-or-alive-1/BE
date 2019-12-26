const db = require('./dbConfig.js');

module.exports = {
	add,
	getAll,
	getBy,
	getById,
	
	/* getAllScores, */
	setOneUserScore,
	getAllScoresForUser
};

// #region user db functions

async function add(user) {
	// sends info, gets id back
	// id is destructured from an array?
	
	clg(14, user)
	if (user.username && user.password && user.email ) {
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
	if (data.score && data.user_id && data.time ) {
		const [score] = await db('scores').insert(data);
		clg(17, score)

		return score;
	} else {
		return ({ err: "Incomplete SCORE data. Check that all fields are sent." })
	}
}

function getAllScoresForUser(user_id) {
	return db("scores").where({ user_id })
}

function clg(...x) { console.log(...x) };