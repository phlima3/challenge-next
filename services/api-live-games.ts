import { api_live_games } from "./api";

export function getLiveWindowGame(gameId: string, date: string) {
  return api_live_games
    .get(`$/window/${gameId}`, {
      params: {
        hl: "pt-BR",
        startingTime: date,
      },
    })
    .then((res) => res.data);
}
