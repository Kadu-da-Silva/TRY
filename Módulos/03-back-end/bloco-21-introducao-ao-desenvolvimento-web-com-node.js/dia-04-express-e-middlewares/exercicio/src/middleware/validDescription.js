const validDescription = (descriptionValue, res, value) => {
  if (!descriptionValue) {
    return res.status(400).json(
      { message: `O campo ${value} é obrigatório` },
    );
  }
};

module.exports = (req, res, next) => {
  const { description } = req.body;

  return validDescription(description, res, 'description')
    || validDescription(description.createdAt, res, 'createdAt')
    || validDescription(description.rating, res, 'rating')
    || validDescription(description.difficulty, res, 'difficulty')
    || next();
};