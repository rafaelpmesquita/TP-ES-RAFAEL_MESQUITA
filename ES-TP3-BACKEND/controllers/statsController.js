const { Action } = require('../models');

const getStats = async (req, res) => {
  const count = await Action.count();
  res.json({ count });
};

module.exports = { getStats };
