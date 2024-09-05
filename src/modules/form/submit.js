import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

// Today
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega data atual e define a data atual como mínima para seleção
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (event) => {
  // Prevent submission
  event.preventDefault();

  try {
    // Recuperando o nome do Cliente
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente");
    }

    // Recupera horário selecionado
    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Selecione a hora.");
    }

    // Recupera somente a hora
    const [hour] = hourSelected.innerText.split(":")

    // Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour");

    // Gerar um ID
    const id = new Date().getTime();

    await scheduleNew({
      id,
      name,
      when,
    });

  } catch (error) {
    alert("Não foi possível realizar o agendamento");
    console.log(error);
  }
}