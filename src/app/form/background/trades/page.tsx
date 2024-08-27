"use client";

import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { CharacterContext } from "~/helpers/characterContext";
import { ALL_TRADES } from "~/types";

export default function Trades() {
  const router = useRouter();
  const character = useContext(CharacterContext);

  const [tradePoints, setTradePoints] = useState(3);
  const [selectedTrades, setSelectedTrades] = useState<string[]>([]);

  function toggleTrade(name: string) {
    const tradeIndex = selectedTrades.indexOf(name);
    if (tradeIndex < 0) {
      setSelectedTrades([...selectedTrades, name]);
    } else {
      setSelectedTrades(selectedTrades.filter((trade) => name !== trade));
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    if (tradePoints < 0) {
      console.log("Hey! you can't spend that many trade points!");
    } else if (tradePoints > 0) {
      // TODO: transfer any unused trade points into language points
      console.log(
        "Spend all your trade points! I don't have a way to transfer trade points to languages yet!",
      );
    } else {
      character.setTrades(selectedTrades);
      router.push("/form/background/languages");
    }
  }

  return (
    <div>
      Trades! Remaining Trade Points: {tradePoints}
      <form onSubmit={handleSubmit}>
        {ALL_TRADES.map((tradeObj) => {
          return (
            <label>
              {tradeObj.name}:
              <input
                type="checkbox"
                name={tradeObj.name}
                onChange={() => toggleTrade(tradeObj.name)}
              />
            </label>
          );
        })}
        <button className="outline-button my-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}