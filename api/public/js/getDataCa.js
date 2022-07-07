export default function getDataCa() {
  const solicitante = document.querySelector(".js_solicitante").value;
  const areaSolicitacao = document.querySelector(
    "[data-area-solicitacao]"
  ).value;
  const grupo = document.querySelector(".js_grupo").value;
  const responsavel = document.querySelector(".js_responsavel").value;
  const resumo = document.querySelector(".js_resumo").value;
  const descricao = document.querySelector(".js_descricao").value;
  const data = {
    solicitante,
    areaSolicitacao,
    grupo,
    responsavel,
    resumo,
    descricao,
  };
  console.log(data);
  return data;
}
