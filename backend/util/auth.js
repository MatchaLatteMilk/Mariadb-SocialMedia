const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models/user.model');

const bcrypthash = (model) => {
    try {
        var hash = bcrypt.hashSync(model.Password, 8);
        console.log('auth hash',hash)
        return hash;
    } catch (error) {
        return console.error(error.message);
    }
}

const jwtoken = (model) => {
    try {
        const token = jwt.sign({model},'secretkey',{expiresIn: '1h'});
        return token;
    } catch (error) {
        return console.error(error.message)
    }
}

const recordCheck = async (model) => {
    console.log('recordcheck');
    try {
        const user = await User.findOne({where: {Name: model.Name}})
        if(user){
            return model.isNewRecord = false;
        }else{
            return model.isNewRecord = true;
        }
    } catch (error) {
        return console.error(error)
    }
}

const passwordCheck = async (model) => {
    try {
        const user = await User.findOne({where: {Name: model.Name}})
        if(user){
            const match = bcrypt.compareSync(model.Password, user.Password);
            console.log(match);
            if(match){
                
            }else{
                return 
            }
        }else{

        }
    } catch (error) {
        return console.error(error)
    }
}

module.exports = {
    recordCheck,
    bcrypthash,
    jwtoken
}