"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "chamados",
      [
        {
          solicitante: "João",
          areaSolicitacao: "TI",
          responsavel: "João",
          resumo: "Erro no sistema",
          descricao: "O sistema não está funcionando corretamente",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          solicitante: "bruno",
          areaSolicitacao: "TI",
          responsavel: "antonino",
          resumo: "Erro no sistema",
          descricao: "O sistema não está funcionando corretamente",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          solicitante: "antonino",
          areaSolicitacao: "TI",
          responsavel: "antonino",
          resumo: "Erro no sistema",
          descricao: "O sistema não está funcionando corretamente",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          solicitante: "João",
          areaSolicitacao: "TI",
          responsavel: "João",
          resumo: "Erro no sistema",
          descricao: "O sistema não está funcionando corretamente",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
