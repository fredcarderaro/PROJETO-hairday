import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";
export async function scheduleFetchByDay(date) {
  try {
    // Faz a requisição à API via GET
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    // Converte a resposta para JSON
    const data = await response.hson();

    // Filtra os agendamentos para o dia selecionado
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    );

    return dailySchedules;
  } catch (error) {
    alert("Não foi possível buscar os agendamentos da data selecionada.")
    console.log(error);
  }
}