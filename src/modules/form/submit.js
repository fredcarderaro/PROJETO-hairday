const form = document.querySelector("form");

form.onsubmit = (event) => {
  // Prevent submission
  event.preventdefault();

  console.log("Enviado");
}