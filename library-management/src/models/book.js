const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publishedYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Book;
