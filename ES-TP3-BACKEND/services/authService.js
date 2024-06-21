const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models');
const config = require('../config');

const authenticate = async (username, password) => {
  const user = await User.findOne({ where: { username } });

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ id: user.id, role: user.role }, config.secret, {
      expiresIn: 86400 // 24 hours
    });
    return { token };
  }
  return null;
};

const register = async (username, password) => {
  const hashedPassword = bcrypt.hashSync(password, 8);
  const user = await User.create({ username, password: hashedPassword });
  return user;
};

module.exports = { authenticate, register };
