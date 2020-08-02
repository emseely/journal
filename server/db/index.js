const db = require("./database");
const Entry = require("./entry");
const Author = require("./author");

Author.hasMany(Entry);
Entry.belongsTo(Author);

module.exports = {
  db,
  Entry,
  Author,
};
