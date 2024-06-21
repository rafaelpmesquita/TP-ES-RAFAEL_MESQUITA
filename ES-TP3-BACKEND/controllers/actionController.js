const { Action } = require('../models');

const mapActionToAcoes = (action) => {
  return {
    nomeDaAcao: action.description,
    nomeDoUsuario: action.userName,
    tipoDeAcao: action.actionType,
    temperatura: action.temperatura,
    data: action.date,
  };
};

// Controlador para buscar as ações e mapear para o novo formato
const getActions = async (req, res) => {
  try {
    const actions = await Action.findAll();
    const mappedActions = actions.map(mapActionToAcoes);
    res.json(mappedActions);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar ações', error });
  }
};

const addAction = async (req, res) => {
  console.log(req.body)
  const { nomeDaAcao, data, nomeDoUsuario, temperatura, tipoDeAcao } = req.body;
  const action = await Action.create({ description: nomeDaAcao, userName: nomeDoUsuario, actionType: tipoDeAcao, temperatura: temperatura, date: data });
  res.json(action);
};



module.exports = { getActions, addAction };
