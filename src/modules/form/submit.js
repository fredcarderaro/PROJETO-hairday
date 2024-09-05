import dayjs from "dayjs";
const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

// Today
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega data atual e define a data atual como mínima para seleção
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) => {
  // Prevent submission
  event.preventdefault();

  console.log("Enviado");
}