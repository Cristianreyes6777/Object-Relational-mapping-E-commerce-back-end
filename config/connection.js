const Sequelize = require('sequelize');
require('dotenv').config(); // Load environment variables from .env file

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql', 
  dialectOptions: {
    decimalNumbers: true,
  },
});

module.exports = sequelize;
