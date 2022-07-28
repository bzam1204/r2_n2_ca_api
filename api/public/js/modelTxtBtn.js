function modelTxtBtn() {
  const descricao = document.querySelector("[data-descricao]");
  const botoes = document.querySelectorAll("[data-modelTxtBtn]");
  const estado = {};

  botoes.forEach((item) => {
    estado[item.id] = false;
  });

  if (botoes.length > 0) {
    botoes.forEach((item) => {
      item.addEventListener("click", () => {
        if (estado[item.id] === false) {
          item.style.backgroundColor = "#0a062b";
          item.style.color = "#c6d4e1";
          descricao.textContent = item.getAttribute("data-text");

          botoes.forEach((model) => {
            if (model.id !== item.id) {
              estado[model.id] = false;
              model.style.backgroundColor = "#c6d4e1";
              model.style.color = "#0a062b";
            }
          });

          estado[item.id] = true;
        } else {
          estado[item.id] = false;
          item.style.backgroundColor = "#c6d4e1";
          item.style.color = "#0a062b";
          descricao.textContent = "";
        }
      });
    });
  }
}

export default modelTxtBtn;
