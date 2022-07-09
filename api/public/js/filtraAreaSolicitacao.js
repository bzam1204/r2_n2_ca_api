import selectList from "./selectList.js";

function filtraAreaSolicitacao(array) {
  var campoFiltro = document.querySelector("[data-input-area-solicitacao]");
  
  campoFiltro.addEventListener("input", function () {
    let arrayN = []
    if (this.value.length > 0) {
      for (var i = 0; i < array.length; i++) {
        var item = array[i];
        var expressao = new RegExp(this.value, "i");

        // Adição aqui
        if (expressao.test(item)) {
          arrayN.push(item);
          selectList(arrayN);
        }
      }
    } else {
      selectList(array);
    }
  });
}

export default filtraAreaSolicitacao;
