import axios from "axios";

const API_LIVE = "https://feed.lolesports.com/livestats/v1";
const PERSISTED_API = "https://esports-api.lolesports.com/persisted/gw";
const API_KEY = "0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z";

const api_lol = axios.create({
  baseURL: PERSISTED_API,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": API_KEY,
  },
});

const api_live_games = axios.create({
  baseURL: API_LIVE,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": API_KEY,
  },
});

export { api_lol, api_live_games };
