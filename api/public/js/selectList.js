function selectList(areasDeSolicitacao) {
  const select = document.querySelector("[data-area-solicitacao]");
  select.innerHTML = "";
  areasDeSolicitacao.forEach((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    option.classList.add("option", "optionAreaSolicitacao");
    select.appendChild(option);
  });
}

export default selectList;
