const Sequelize = require('sequelize');
const config = require('./config');

const seql = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: 'localhost',
    dialect: 'mariadb'
  });

async function connection () {
    try {
        await seql.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error(error.message);
    }
}

async function closeCon () {
    try {
        await seql.close();
        console.log('Connection has been closed successfully.');
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = {
    connection,
    closeCon,
    seql
};