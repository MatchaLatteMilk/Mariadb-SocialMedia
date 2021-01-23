const bcrypt = require('bcryptjs');
const { User } = require('../models/user.model');

const bcrypthash = async (req,res) => {
    var userinput = req.body;
    var salt = await bcrypt.genSalt(10);
    var hash = await bcrypt.hash(userinput.password,salt,(err,result)=>{
        return hash
    })
}

const nameCheck = (req,res) => {
    
}

module.exports = {
    nameCheck,
    bcrypthash
}