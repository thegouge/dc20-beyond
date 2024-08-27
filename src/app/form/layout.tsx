"use client";

import { Character } from "~/types";
import { CharacterContext } from "~/helpers/characterContext";
import { useEffect } from "react";

export default function FormLayout({ children }: any) {
  const character = new Character();

  useEffect(() => {
    const savedCharacter = window.localStorage.getItem("saved-character");

    if (!savedCharacter) {
      window.localStorage.setItem("saved-character", JSON.stringify(character));
    } else {
      character.loadSavedCharacter(JSON.parse(savedCharacter));
    }
  });

  return (
    <CharacterContext.Provider value={character}>
      {children}
    </CharacterContext.Provider>
  );
}
