import { api_lol } from "./api";

export function getLiveGames() {
  return api_lol.get("/getLive?hl=pt-BR").then((res) => res.data);
}

export function getSchedule() {
  return api_lol.get("/getSchedule?hl=pt-BR");
}
