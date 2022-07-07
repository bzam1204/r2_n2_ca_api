import areasDeSolicitacao from "./areasDeSolicitacao.js";
import btnSentEventListener from "./btnSendEventListener.js";
import listaAreaSolicitacao from "./listaAreaSolicitacao.js";
import selectList from "./selectList.js";

function main() {
  selectList(areasDeSolicitacao);
  listaAreaSolicitacao(areasDeSolicitacao);
  btnSentEventListener();
}

main();
