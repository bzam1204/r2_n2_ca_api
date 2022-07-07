import selectList from "./selectList.js";

function listaAreaSolicitacao(areasDeSolicitacao) {
  var campoFiltro = document.querySelector("[data-input-area-solicitacao]");
// 
  campoFiltro.addEventListener("input", function () {
    var options = document.querySelectorAll(".option");

    if (this.value.length > 0) {
      for (var i = 0; i < options.length; i++) {
        if (options[i].textContent.toLowerCase().indexOf(this.value) > -1) {
          options[i].style.display = "block";
        } else {
          options[i].remove()
        }
      }
    } else {
      
      for (var i = 0; i < options.length; i++) {
        options[i].style.display = "block";
        selectList(areasDeSolicitacao);
      }
    } 
  });
}

export default listaAreaSolicitacao;

/*

  const input = document.querySelector("[data-input-area-solicitacao]");
  input.addEventListener("input", function (e) {
    const divSelect = document.querySelector("[data-area-solicitacao]");
    const filtro = e.target.value.toUpperCase();
    lista = lista.filter((value) => {
      return (value == filtro);
    });
    lista.forEach((item) => {
      const span = document.createElement("span");
      span.value = item;
      span.textContent = item;
      divSelect.appendChild(span);
      divSelect.classList.add("show");
    });
  });
*/
