export default function senData(data) {
  if (data.grupo == "") delete data.grupo;

  fetch("http://10.50.16.93:4242/chamado/create", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      response.json();
      console.log(response);
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
