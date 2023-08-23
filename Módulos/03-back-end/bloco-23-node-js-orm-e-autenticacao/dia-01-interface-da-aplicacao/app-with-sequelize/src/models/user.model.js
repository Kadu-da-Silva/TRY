const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
  });

  (async () => {
    await sequelize.sync({ force: true });
    // As funções vão aqui
  })();
  // Note que o método sync está sendo chamado com o parâmetro force: true. Isso significa que, toda vez que o servidor for iniciado, a tabela será recriada. Isso é útil para testes, mas não deve ser usado em produção.

  return User;
};

module.exports = UserModel;