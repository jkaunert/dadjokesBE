bcrypt = require('bcrypt');


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'leonel', password: "pass"},
        { username: "test", password: bcrypt.hashSync('pass', 10) }
      ]);
    });
};
