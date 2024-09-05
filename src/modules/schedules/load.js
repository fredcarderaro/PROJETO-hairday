import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import { scheduleShow } from "../schedules/show.js";

const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  // Obtem a data do input
  const date = selectedDate.value;

  //Busca na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date });

  // Exibe os agendamentos
  scheduleShow({ dailySchedules });

  // Renderiza as horas disponíveis
  hoursLoad({ date, dailySchedules });


  // Busca na API os agendamentos para carregar do lado direito da tela.

  // Os horários disponíveis, do lado esquerdo da tela (futuro e livres)
};

