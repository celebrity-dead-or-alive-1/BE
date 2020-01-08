
exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('users').truncate()
		.then(function () {
			// Inserts seed entries
			return knex('users').insert([
				{ id: 1, username: 'Meep', password: "pluck", email: "meep@example.com", admin: true },
				{ id: 2, username: 'Glibber', password: "pluck", email: "glibber@example.com", admin: false  }
			]);
		});
};
