import getDataCa from "./getDataCa.js";
import senData from "./senData.js";

function btnSentEventListener() {
  //take the button element from the DOM
  const btnSend = document.querySelector("[data-btn-send]");
  //add an event listener to the button
  btnSend.addEventListener("click", function (e) {
    e.preventDefault();
    const data = getDataCa();
    senData(data);
  });
}

export default btnSentEventListener;
