const { NUMERIC } = require("sequelize");
const database = require("../models");

class ChamadoController {
  static async getChamados(req, res) {
    try {
      const chamados = await database.chamados.findAll();
      return res.status(200).json(chamados);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async getOneChamado(req, res) {
    const { id } = req.params
    try {
      const chamado = await database.chamados.findOne({
        where: {
          id: Number(id)
        }
      });
      return res.status(200).json(chamado);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async getChamadosResponsavel(req, res) {
    const { responsavel } = req.params
    try {
      const chamadosResponsavel = await database.chamados.findAll({
        where: {
          responsavel: responsavel
        }
      })
      return res.status(200).json(chamadosResponsavel)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }

  static async createChamado(req, res) {
    const chamado = req.body;
    try {
      const chamadoCriado = await database.chamados.create(chamado);
      return res.status(201).json(chamadoCriado);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async updateChamado(req, res) {
    const { id } = req.params;
    const novoChamado = req.body;
    try {
      await database.chamados.update(novoChamado, {
        where: {
          id: Number(id),
        },
      });
      const chamadoFinalizado = await database.chamados.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(chamadoFinalizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteChamado(req, res) {
    const { id } = req.params
    try {
      await database.chamados.destroy({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(`O chamado sob o ID: ${id} foi destruido.`)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
}

module.exports = ChamadoController;
