const { Sequelize, DataTypes} = require('sequelize');
const { seql } = require('../mariadb/connection');

const User = seql.define('User',{
    Name:{
        type: DataTypes.STRING,
        allownull: false
    },
    Password:{
        type: DataTypes.STRING,
        allownull: false
    },
    UUID:{
        type: DataTypes.UUID,
        defaultValue: seql.UUIDV4 // Or Sequelize.UUIDV1
    }
}, {
    seql,
    modelName: 'User',
    tableName: 'Employees'
});

module.exports = {
    User,
    seql
}