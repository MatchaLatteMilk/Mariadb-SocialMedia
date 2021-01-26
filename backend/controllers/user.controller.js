const { User } = require('../models/user.model');
const { seql } = require('../mariadb/connection');
const bcrypt = require('bcryptjs');
const { recordCheck,bcrypthash,jwtoken } = require('../util/auth')


seql.sync();

const SignUp = async(req,res) => {
    console.log('/api/user/SignUp')
    try {
        // // console.log('req.body', req.body)
        const data = await req.body;
        console.log('data:',data);

        const hashPW = await bcrypthash(data);
        const aunth = await recordCheck(data);
        if(aunth === true){
            const newUser = await User.create({
                Name: data.Name,
                Password: hashPW
            })
            res.status(200).send({message: 'User successfully registered!'})
        }else{
            res.status(400).send({message: 'User is already in the database.'})
        }
    } catch (error) {
        console.error(error.message)
        res.status(400).send(error)
    }
}

const SignIn = async(req,res) => {
    console.log('/api/user/SignIn')
    try {
        const data = await req.body;
        console.log(data);
        const aunth = await recordCheck(data);
        if(aunth === true){
            
        }else{
            res.status(400).send({message: 'User is not in the database'})
        }
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
