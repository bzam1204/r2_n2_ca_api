import areasDeSolicitacao from "./areasDeSolicitacao.js";
import btnSentEventListener from "./btnSendEventListener.js";
import filtraAreaSolicitacao from "./filtraAreaSolicitacao.js";
import modeloDeTexto from "./modeloDeTexto.js";
import selectList from "./selectList.js";

function main() {
  
  selectList(areasDeSolicitacao);
  filtraAreaSolicitacao(areasDeSolicitacao);
  btnSentEventListener();
  modeloDeTexto()
}

main();
