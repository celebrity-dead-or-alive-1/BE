
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('scores').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('scores').insert([
        {id: 1, score: '7', user_id:"2", time: 15},
        {id: 2, score: '14', user_id:"1", time: 17},
        {id: 3, score: '19', user_id:"1", time: 11}
      ]);
    });
};
