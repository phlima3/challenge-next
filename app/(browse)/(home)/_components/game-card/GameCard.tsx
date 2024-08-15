import { TodayEvent } from "@/interfaces/events-today";
import Image from "next/image";

type Props = {
  game: TodayEvent;
};

export function GameCard({ game }: Props) {
  return (
    <div className="p-4 space-y-7 bg-slate-600 rounded-lg hover:scale-105 transition-transform cursor-pointer">
      <h3 className="text-center font-bold">{game.league.name}</h3>

      <div className="flex space-x-6 items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Image
            width={64}
            height={64}
            className="rounded-2xl bg-slate-500"
            src={game.match.teams[0].image}
            alt={game.match.teams[0].name}
          />
          <span className="text-center">{game.match.teams[0].name}</span>
        </div>

        <h1 className="text-2xl font-bold">VS</h1>

        <div className="flex flex-col items-center justify-center">
          <Image
            width={64}
            height={64}
            className="rounded-2xl bg-slate-500"
            src={game.match.teams[1].image}
            alt={game.match.teams[1].name}
          />
          <span className="text-center">{game.match.teams[1].name}</span>
        </div>
      </div>
    </div>
  );
}
