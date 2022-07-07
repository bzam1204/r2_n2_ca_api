function selectList(areasDeSolicitacao) {
  const select = document.querySelector("[data-area-solicitacao]");
  areasDeSolicitacao.forEach((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    option.classList.add("option");
    select.appendChild(option);
  });
}

export default selectList;
