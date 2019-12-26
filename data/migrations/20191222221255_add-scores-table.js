
exports.up = function (knex) {
    return knex.schema.createTable("scores", scores => {
        scores.increments();

        scores
            .integer("score")
            .notNullable()

        scores
            .integer("user_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")

        scores
            .integer("time")
            .notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("scores")
};
