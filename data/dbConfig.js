require("dotenv").config;

const knex = require("knex");
const knexfile = require("../knexfile.js");
const environment = process.env.DB_CONNECT;

module.exports = knex(knexfile[environment]);
