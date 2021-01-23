const { User } = require('../models/user.model');
const { seql } = require('../mariadb/connection');
const { nameCheck,bcrypthash } = require('../util/auth')


seql.sync();

const SignUp = async(req,res) => {
    console.log('/api/user/SignUp')
    try {
        // console.log('req.body', req.body)
        const newUser = await User.create({
            Name: req.body.Name,
            Password: req.body.Password
        });
        console.log(newUser)
    } catch (error) {
        console.error(error.message)
        res.status(400).send(error)
    }
}

const SignIn = async(req,res) => {
    console.log('/api/user/SignIn')
    try {
        
    } catch (error) {
        console.error(error.message)
        res.status(400).send(error)
    }
}

const ShowAll= async(req,res) => {
    console.log('/api/user/showall')
    try {
        User.findAll({})
        .then(result =>{
            res.status(200).json(result)
        })
    } catch (error) {
        
    }
}

  module.exports = {
    SignUp,
    SignIn,
    ShowAll
  }
