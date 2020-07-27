const Sequelize = require("sequelize");
const db = require("./database.js");

module.exports = db.define("author", {
  handle: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      "https://vignette.wikia.nocookie.net/haikyuu/images/e/e5/Hinata_s1-e1-1.png/revision/latest/top-crop/width/300/height/300?cb=20200508104838",
  },
  bio: {
    type: Sequelize.TEXT,
  },
});
