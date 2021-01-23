const { seql } = require('../mariadb/connection');

seql.sync();

const create = model = async (req,res) => {
    try {
        const result = await model.build(req.body)
        console.log(req.body)
    } catch (error) {
        
    }
}

module.exports = {
    create
}