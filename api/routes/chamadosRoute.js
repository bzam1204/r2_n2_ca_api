const { Router } = require("express");
const path = require("path");
const ChamadoController = require("../controllers/ChamadoController");

const router = Router();

router
  .get("/chamados", ChamadoController.getChamados)
  .get("/chamado/:id", ChamadoController.getOneChamado)
  .get("/chamados/:responsavel", ChamadoController.getChamadosResponsavel)
  .post("/chamado/create", ChamadoController.createChamado)
  .put("/chamado/update/:id", ChamadoController.updateChamado)
  .delete("/chamado/delete/:id", ChamadoController.deleteChamado)
  .get("/", (req, res) => {
    res.sendFile(path.join(`${__dirname}../../index.html`));
    //__dirname : It will resolve to your project folder.
  }); 

module.exports = router;
