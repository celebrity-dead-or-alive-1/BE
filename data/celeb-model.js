const db = require('./dbConfig.js');

module.exports = {
    add,
    getAll,
    getById,
    change,
    remove
};

async function add(celeb) {
    // sends info, gets id back
    // id is destructured from an array?
    const [id] = await db('celeb').insert(celeb);

    return getById(id);
}

function getAll() {
    return db('celeb');
}

function getById(id) {
    return db('celeb')
        .where({ id })
        .first();
}

function change(id, celeb) {
    return db("celeb")
        .where({ id })
        .update(celeb)
}
function remove(celeb) {
    return db('celeb')
        .where({ celeb })
        .first();
}
