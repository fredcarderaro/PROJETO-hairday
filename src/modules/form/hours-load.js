import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hour.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

export function hoursLoad({ date }) {
  // Limpa a lista de horários
  hours.innerHTML = "";
  const opening = openingHours.map((hour) => {
    // Recupera somente a hora
    const [scheduleHour] = hour.split(":");  // Desestrutura o array e pega somente horas

    // Adiciona a hora na data e verifica se está no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    return {
      hour,
      available: isHourPast,
    }

    // console.log(scheduleHour, isHourPast);
  });

  // Renderiza os horários
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");
    li.classList.add("hour");
    console.log("AVAL:", available)
    li.classList.add(available ? "hour-available" : "hour-unavailable");  // Adiciona a forma conforme resultado da condicional

    li.textContent = hour;

    if (hour === "9:00") {
      hourHeaderAdd("Manhã");
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde");
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite");
    }
    hours.append(li);

  })

  // Adiciona evendo de clique nos horarios disponiveis
  hoursClick();
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");

  header.textContent = title;

  hours.append(header);
}