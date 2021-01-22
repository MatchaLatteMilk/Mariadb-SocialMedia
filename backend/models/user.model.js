const { Sequelize, DataTypes} = require('sequelize');
const seql = new Sequelize('mariadb::memory:');

const User = seql.define('User',{
    Name:{
        type: DataTypes.STRING,
        allownull: false
    },
    Password:{
        type: DataTypes.STRING,
        allownull: false
    },
    Date:{
        type: DataTypes.DATE,
        allownull: false
    }
}, {
    seql,
    modelName: 'User',
    tableName: 'Employees'
});

const userModel = seql.models.User;

module.exports = userModel;