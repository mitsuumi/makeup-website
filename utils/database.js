const Sequelize = require('sequelize');

////////////////////////////////////////////////////////////

const database = new Sequelize('demo 2', 'root', '12345678', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = database;