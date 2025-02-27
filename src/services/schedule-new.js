import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when }) {
  try {
    // Faz a requisição à API via POST
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    });
  } catch (error) {
    alert("Não foi possível agendar, tente mais tarde.")
    console.log(error);
  }
}