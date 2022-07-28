function modeloDeTexto() {
  const descricao = document.getElementById("[data-descricao]");
  const container = document.querySelector(".wrapModeloLabel");
  const lista = document.createElement("ul");
  container.appendChild(lista);
  const texto = [
    {
      title: "Necessidade",
      text: "Há a necessidade de ******* no computador em questão.",
    },
  ];

  texto.forEach((item) => {
    lista.innerHTML += `<li class="modeloDescricaoItem" id="${item.title}"> ${item.title} </li>`;
  });

}

export default modeloDeTexto;
