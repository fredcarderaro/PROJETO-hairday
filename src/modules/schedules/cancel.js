import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";

const periods = document.querySelectorAll(".period");

// Gera evento de click para cada item da lista (manhã, tarde e noite)
periods.forEach((period) => {
  // Captura o evento de clique na lista
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-item")) {
      // Obtém a li pai do elemento clicado
      const item = event.target.closest("li");

      // Pega o ID do agendamento
      const { id } = item.dataset;

      // Confirma que obteve o ID
      if (id) {
        // Confirma exclusão
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?");
        if (isConfirm) {
          // Cancela o agendamento
          await scheduleCancel({ id });
          // Recarrega os agendamentos
          schedulesDay();
        }
      }
    }

  })
})