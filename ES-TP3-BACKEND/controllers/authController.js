const { authenticate, register } = require('../services/authService');

const login = async (req, res) => {
  const { username, password } = req.body;
  const result = await authenticate(username, password);

  if (result) {
    res.json(result);
  } else {
    res.status(401).send({ message: 'Invalid credentials' });
  }
};

const signup = async (req, res) => {
  const { username, password } = req.body;
  const user = await register(username, password);
  res.json(user);
};

module.exports = { login, signup };
