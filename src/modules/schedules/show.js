import dayjs from "dayjs";

// Seleciona as sessões da manhã, tarde e noite
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function scheduleShow({ dailySchedules }) {
  try {
    // Manhã
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    // Renderiza os agendamentos por periodo
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const name = document.createElement("span");

      // Adiciona o ID do agendamento
      item.setAttribute("data-id", schedule.id);

      time.textContent = dayjs(schedule.when).format("HH:mm");
      name.textContent = schedule.name;

      // Cria ícone de cancelar agendamento
      const cancelIcon = document.createElement("img");
      cancelIcon.classList.add("cancel-item");
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg");
      cancelIcon.setAttribute("alt", "Cancelar");

      // Adiciona o tempo, nome e icone
      item.append(time, name, cancelIcon);

      // Obtém somente a hora
      const hour = dayjs(schedule.when).hour();

      // Renderiza o agendamento na sessão (manhã, tarde, noite)
      if (hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodNight.appendChild(item);
      }
    });


  } catch (error) {
    alert("Não foi possível exibir os agendamentos.");
    console.log(error);
  }
}
