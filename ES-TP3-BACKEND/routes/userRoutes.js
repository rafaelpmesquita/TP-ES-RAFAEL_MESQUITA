const express = require('express');
const { getUser } = require('../controllers/userController');
const { verifyToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', verifyToken, getUser);

module.exports = router;
