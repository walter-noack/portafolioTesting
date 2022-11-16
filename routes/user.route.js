const { Router } = require('express');
const { createUser, getUser } = require('../controller/user.controller')

const router = Router();

router.post('/', createUser);
router.get('/', getUser);

module.exports = router;