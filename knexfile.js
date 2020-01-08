// Update with your config settings.

module.exports = {

    development: {
        client: "sqlite3",
        connection: {
            filename: process.env.DATABASE_URL,
        },
        useNullAsDefault: true,
        migrations: {
            directory: "./data/migrations",
        },
        seeds: {
            directory: "./data/seeds",
        },
        pool: {
            afterCreate: (conn, done) => {
                conn.run("PRAGMA foreign_keys = ON", done);
            },
        },
    },

    production: {
        client: "pg", // install this npm package
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: "./data/migrations",
        },
        seeds: {
            directory: "./data/seeds",
        },
    }
};
