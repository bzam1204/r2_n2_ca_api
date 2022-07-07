export default function getDataCa() {
  const solicitante = document.querySelector("[data-solicitante]").value;
  const areaSolicitacao = document.querySelector(
    "[data-area-solicitacao]"
  ).value;
  const grupo = document.querySelector("[data-grupo]").value;
  const responsavel = document.querySelector("[data-responsavel]").value;
  const resumo = document.querySelector("[data-resumo]").value;
  const descricao = document.querySelector("[data-descricao]").value;
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
