export function getLocalRaceDate(date, time) {
  const raceDate = new Date(date + "T" + time);
  const hours = (raceDate.getHours() < 10 ? "0" : "") + raceDate.getHours();
  const minutes =
    (raceDate.getMinutes() < 10 ? "0" : "") + raceDate.getMinutes();

  return hours + ":" + minutes;
}

export function convertDate(dateToConvert) {
  const date = dateToConvert.split("-");

  return `${date[2]}/${date[1]}/${date[0]}`;
}
