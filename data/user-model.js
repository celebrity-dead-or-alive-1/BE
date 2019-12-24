const db = require('./dbConfig.js');

module.exports = {
	add,
	getAll,
	getBy,
	getById
};

async function add(user) {
	// sends info, gets id back
	// id is destructured from an array?
	clg(13, user)
	if (!user.username || !user.password || !user.email ) {
		return ({ err: "Incomplete registration info. Check that all fields are sent." })
	} else {
		const [id] = await db('users').insert(user);
		clg(15, id)

		return getById(id);
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

function clg(...x) { console.log(...x) };