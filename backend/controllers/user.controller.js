const {User, seql} = require('../models/user.model');



seql.sync({ force: true });
    
const showall = async(req,res) => {
    console.log('/api/user/showAll')
    try {
        User.findAll({})
        .then(result => {
            res.json(result);
        })
    } catch (error) {
        console.error(error.message)
        res.status(400).send(error)
    }
}

const createUser = async(req,res) => {
    console.log('/api/user/createUser')
    try {
        User.create({
            name: req.body.name,
            password: req.body.password
        })
    } catch (error) {
        console.error(error.message)
        res.status(400).send(error)
    }
}

const deleteUser = async(req,res) => {
    console.log('/api/user/deleteUser')
    try {
        User.findbyId({})
        .then(result => {
            if(!User){
                return res.status(400).send({message: 'user not found.'})
            }
            return User.destroy().then(() => {res.status(200).send({message: 'User Deleted successfully'})})
                                .catch(error => res.status(400).send(error))
        })
    } catch (error) {
        console.error(error.message)
        res.status(400).send(error)
    }
}

  module.exports = {
      showall,
      createUser,
      deleteUser
  }
