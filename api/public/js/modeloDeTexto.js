import modelTxtBtn from "./modelTxtBtn.js";

function modeloDeTexto() {
  const descricao = document.getElementById("[data-descricao]");
  const container = document.querySelector(".wrapModeloLabel");
  const lista = document.createElement("ul");
  lista.classList.add("listaModeloLabel");
  container.appendChild(lista);
  const texto = [
    {
      title: "Necessidade",
      text: "Há a necessidade de ******* no computador em questão.",
    },
    {
      title: "Solicitação",
      text: "O(a) servidor(a) solicita ******* . Solicita suporte técnico.",
    },
    {
      title: "Informa",
      text: "O(a) servidor(a) informa que ******* . Solicita suporte técnico.",
    },
  ];

  texto.forEach((item) => {
    lista.innerHTML += `<li data-modelTxtBtn class="modeloDescricaoItem" data-text="${item.text}" id="${item.title}"> ${item.title} </li>`;
  });
  modelTxtBtn();
}

export default modeloDeTexto;
