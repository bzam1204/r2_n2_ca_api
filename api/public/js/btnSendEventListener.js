import getDataCa from "./getDataCa.js";
import senData from "./senData.js";
import verificaDadosFormulario from "./verificaDadosFormulario.js";

function btnSentEventListener() {
  //take the button element from the DOM
  const btnSend = document.querySelector("[data-btn-send]");
  //add an event listener to the button
  btnSend.addEventListener("click", function (e) {
    e.preventDefault();
    const data = getDataCa();
    if (verificaDadosFormulario(data)) senData(data);
  });
}

export default btnSentEventListener;
