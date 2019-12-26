exports.up = function (knex) {
    return knex.schema.createTable("celebrity", celeb => {
        celeb.increments();

        celeb
            .string("celebname", 128)
            .notNullable()
            .unique();

        celeb
            .string("image_url", 128)
            .notNullable()
            .unique();

        celeb
            .string("factoid", 128)
            .notNullable()
            .unique();

        celeb
            .integer("birthyear")
            .notNullable()

        celeb
            .boolean("alive")
            .notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("celeb")
};
