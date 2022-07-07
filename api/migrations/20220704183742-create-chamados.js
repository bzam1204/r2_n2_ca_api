'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('chamados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      solicitante: {
        allowNull: false,
        type: Sequelize.STRING
      },
      areaSolicitacao: {
        allowNull: false,
        type: Sequelize.STRING
      },
      grupo: {
        defaultValue: "Field Services N2",
        type: Sequelize.STRING
      },
      responsavel: {
        allowNull: false,
        type: Sequelize.STRING
      },
      resumo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      descricao: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      status: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('chamados');
  }
};