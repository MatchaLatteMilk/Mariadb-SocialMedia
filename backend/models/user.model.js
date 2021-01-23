const { Sequelize, DataTypes} = require('sequelize');
const { seql } = require('../mariadb/connection');

const User = seql.define('User',{
    Name:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    Password:{
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
    seql,
    modelName: 'User',
    tableName: 'Employees'
});

const user_model = seql.model.User;

module.exports = {
    User
}