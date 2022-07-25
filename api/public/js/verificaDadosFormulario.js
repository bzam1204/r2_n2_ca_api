function verificaDadosFormulario({
  solicitante,
  responsavel,
  resumo,
  descricao,
}) {
  if (
    solicitante === "" ||
    responsavel === "" ||
    resumo === "" ||
    descricao === ""
  ) {
    alert("Preencha todos os campos");
    return false;
  }
  return true;
}

export default verificaDadosFormulario;
