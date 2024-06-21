const express = require('express');
const { getStats } = require('../controllers/statsController');
const { verifyToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', verifyToken, getStats);

module.exports = router;
