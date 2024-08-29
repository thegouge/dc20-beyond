"use client";

import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { CharacterContext } from "~/helpers/characterContext";
import { saveCharacter } from "~/helpers/localStorage";

export default function FormPage() {
  const character = useContext(CharacterContext);
  const router = useRouter();

  const [playerName, setPlayerName] = useState("");
  const [characterName, setCharacterName] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();

    character.setMetaData({
      playerName,
      characterName,
    });

    saveCharacter(character);

    router.push("/form/attributes");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        What's your name?
        <input
          className="text-black"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
      </label>
      <label>
        What's your character's name?
        <input
          className="text-black"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
        />
      </label>

      <button className="outline-button my-3" type="submit">
        Submit
      </button>
    </form>
  );
}
