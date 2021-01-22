const {Router} = require('express');
const { deleteUser, createUser, showall } = require('../controllers/user.controller');

const router = new Router();
router.get('/', showall);
router.post('/create', createUser)
router.post('/delete', deleteUser)

module.exports = router