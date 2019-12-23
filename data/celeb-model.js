const db = require("./dbConfig.js");

module.exports = {
	add,
	getAll,
	getById,
	change,
	remove
};

async function add(celeb) {
	const [id] = await db("celebrity").insert(celeb);
	return getById(id);
}

function getAll() {
	return db("celebrity");
}

function getById(id) {
	return db("celebrity")
		.where({ id })
		.first();
}

function change(id, celeb) {
	db("celebrity").where({ id }).update(celeb);
	return getById(id);
}
function remove(id) {
	return db("celebrity")
		.where({ id })
		.first();
}
