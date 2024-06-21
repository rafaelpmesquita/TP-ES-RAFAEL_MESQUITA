const { User } = require('../models');

const getUser = async (req, res) => {
  const user = await User.findByPk(req.userId, {
    attributes: ['id', 'username', 'role']
  });
  res.json(user);
};

module.exports = { getUser };
