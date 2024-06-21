const express = require('express');
const { getActions, addAction } = require('../controllers/actionController');
const { verifyToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', verifyToken, getActions);
router.post('/', verifyToken, addAction);

module.exports = router;
