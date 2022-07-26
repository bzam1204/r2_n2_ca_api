export default function senData(data) {
  if (data.grupo == "") delete data.grupo;

  fetch("http://10.50.16.93:4242/chamados/create", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      msgSuccess();
      console.log(res);
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
      msgErro();
    });
}

function msgErro() {
  const span = document.querySelector("[data-spanMsg]");
  span.innerHTML = `<img class="success" src="./img/falha ao enviar.png" alt=""
  />`;
  span.classList.add("showMsg");
  span.addEventListener("click", () => {
    span.classList.remove("showMsg");
  });
}

function msgSuccess() {
  const span = document.querySelector("[data-spanMsg]");
  span.innerHTML = `<img class="success" src="./img/ENVIADO COM SUCESSO.png" alt=""
/>`;
  span.classList.add("showMsg");

  span.addEventListener("click", () => {
    span.classList.remove("showMsg");
  });
}
