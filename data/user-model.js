const db = require('./dbConfig.js');

module.exports = {
	add,
	getAll,
	getBy,
	getById,
	
	/* getAllScores, */
	setOneUserScore,
	/* getAllUserScores, */
};

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

async function setOneUserScore(data) {
	clg(40, data);
	if (data.id && data.score && data.time ) {
		const [score] = await db('scores').insert(data);
		clg(17, score)

		return score;
	} else {
		return ({ err: "Incomplete SCORE data. Check that all fields are sent." })
	}
}

function clg(...x) { console.log(...x) };