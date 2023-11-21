const validCreatedAt = (req, res, next) => {
  const { createdAt } = req.body.description;

  const dataRegex = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
  const createdAtValid = dataRegex.test(createdAt);
  if(!createdAtValid) {
    return res.status(400).json({
      message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\''
    })
  };
  next();
};

module.exports = validCreatedAt;