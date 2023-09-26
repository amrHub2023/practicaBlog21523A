const { Sequelize, DataTypes } = require('sequelize');

// Instancia de conexión a la base de datos
const sequelize = new Sequelize(
    process.env. DB_NAME,
    process.env. DB_USER,
    process.env. DB_PASS,
    { 
    host:process.env. DB_HOST,
    dialect: 'mysql'
    });


module.exports = {
    sequelize,
    Sequelize,
    DataTypes
}
 