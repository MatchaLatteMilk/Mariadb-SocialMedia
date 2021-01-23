const {Router} = require('express');
const { SignUp, SignIn, ShowAll } = require('../controllers/user.controller');

const router = new Router();
router.get('/showall', ShowAll);
router.post('/signup', SignUp)
router.post('/signin', SignIn)

module.exports = router