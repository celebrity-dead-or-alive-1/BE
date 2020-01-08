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
	if (celeb.celebname && celeb.image_url && celeb.factoid && celeb.birthyear && (celeb.alive !== null)) {
		const [output] = await db("celebrity").insert(celeb, "id");
		clg(17,[output])
		return ({ status: 201, msg: getById(output) });
	} else {
		return ({ status: 418, msg: "Incomplete CELEBRITY info. Check that all fields are sent." })
	}
}

async function change(celeb) {
	// clg(23,celeb)
	if (celeb.id && celeb.celebname && celeb.image_url && celeb.factoid && celeb.birthyear && (celeb.alive !== null)) {
		const id = celeb.id;
		clg(31, id)
		if (await db("celebrity").where({ id }).update(celeb)) {
			return { status: 202, success: 1, msg: `id${id} Update successful.`}
		} else {
			return { status: 500, success: 0, msg: "DB UPDATE Problem."}
		}
		// return ({ status: 201, success: update, msg: getById(id) });
	} else {
		clg(36, celeb);
		return ({ status: 418, success: 0, msg: "Incomplete CELEBRITY info. Check that all fields are sent." })
	}
}

function getAll() {
	return db("celebrity");
}

function count() {
	clg("inside count");
	return db("celebrity")
		.count("celebname", { as: "count" })
		.first()
}

function getById(id) {
	return db("celebrity")
		.where({ id })
		.first();
}

async function remove(id) {
	if (await db("celebrity").where({ id }).del()) {
		return { status: 202, success: 1, msg: `id${id} DELETE successful.`}
	} else {
		return { status: 500, success: 0, msg: "DB DELETE Problem."}
	}
}



function clg(...x) { console.log(...x) };


