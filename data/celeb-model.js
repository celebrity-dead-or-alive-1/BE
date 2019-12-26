const db = require("./dbConfig.js");

module.exports = {
	add,
	getAll,
	getById,
	change,
	remove,
	count
};

async function add(celeb) {
	const [id] = await db("celebrity").insert(celeb);
	return getById(id);
}

function getAll() {
	return db("celebrity");
}

function count() {
	return db("celebrity")
	.count("celebname", {as: "count"})
	.first()
}

function getById(id) {
	return db("celebrity")
		.where({ id })
		.first();
}

function change(celeb) {
	const id = celeb.id;
	console.log("28",id,celeb)
	return db("celebrity")
		.where({ id })
		.update(celeb)
		.then(ct => (
			ct != 0 && getById(id)
		))
}

function remove(id) {
	return db("celebrity")
		.where({ id })
		.del();
}


function clg(...x) { console.log(...x) };


