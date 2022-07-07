'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chamados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  chamados.init({
    solicitante: DataTypes.STRING,
    areaSolicitacao: DataTypes.STRING,
    responsavel: DataTypes.STRING,
    grupo: DataTypes.STRING,
    resumo: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'chamados',
  });
  return chamados;
};