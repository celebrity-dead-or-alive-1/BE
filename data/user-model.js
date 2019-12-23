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
	const [id] = await db('users').insert(user);

	return findById(id);
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