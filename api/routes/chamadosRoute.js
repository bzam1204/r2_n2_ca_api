const { Router } = require("express");
const path = require("path");
const ChamadoController = require("../controllers/ChamadoController");

const router = Router();

router
  .get("/chamados", ChamadoController.getChamados)
  .get("/chamados/:id", ChamadoController.getOneChamado)
  .get("/chamados/:responsavel", ChamadoController.getChamadosResponsavel)
  .post("/chamados/create", ChamadoController.createChamado)
  .put("/chamados/update/:id", ChamadoController.updateChamado)
  .delete("/chamados/delete/:id", ChamadoController.deleteChamado)
  .get("/", (req, res) => {
    res.sendFile(path.join(`${__dirname}../../index.html`));
    //__dirname : It will resolve to your project folder.
  }); 

module.exports = router;
