"use client";

import { Button } from "@/components/ui/button";
import { TodayEvent } from "@/interfaces/events-today";
import { getSchedule } from "@/services/api-lol";
import { filterByTodayDate } from "@/utils/filterByToday";
import { useEffect, useState } from "react";
import { GameCard } from "../_components/game-card/GameCard";

export default function Home() {
  const [todayEvents, setTodayEvents] = useState<TodayEvent[]>([]);

  useEffect(() => {
    getSchedule()
      .then((response) => {
        setTodayEvents(
          response.data.data.schedule.events.filter(filterByTodayDate)
        );
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex flex-col space-y-10 items-center justify-center py-4">
      <h1 className="text-2xl font-bold text-center">
        JOGOS FINALIZADOS DE HOJE
      </h1>

      <div className="flex flex-col space-y-6">
        {todayEvents.map((game) => (
          <GameCard key={game.match.id} game={game} />
        ))}
      </div>
    </div>
  );
}
