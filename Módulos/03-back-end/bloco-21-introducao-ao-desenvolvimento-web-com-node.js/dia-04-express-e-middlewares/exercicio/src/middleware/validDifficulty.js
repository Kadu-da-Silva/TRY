const validDifficulty = (req, res, next) => {
  const { difficulty } = req.body.description;

  const validDifficulties = ["Fácil", "Médio", "Difícil"];
  if (!validDifficulties.includes(difficulty)) {
    return res.status(400).json({
      'message': 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'',
    })
  };
  next();
};

module.exports = validDifficulty;