import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hour.js";

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    // Recupera somente a hora
    const [scheduleHour] = hour.split(":");  // Desestrutura o array e pega somente horas

    // Adiciona a hora na data e verifica se está no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    return {
      hour,
      avaliable: isHourPast,
    }

    // console.log(scheduleHour, isHourPast);
  });
}