import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.getElementById("date");

export function schedulesDay() {
  // Obtem a data do input
  const date = selectedDate.value;
  // Renderiza as horas disponíveis
  hoursLoad({ date });


  // Busca na API os agendamentos para carregar do lado direito da tela.

  // Os horários disponíveis, do lado esquerdo da tela (futuro e livres)
};

