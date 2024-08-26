"use client";

import { Character } from "~/types";
import { CharacterContext } from "~/helpers/characterContext";

export default function FormLayout({ children }: any) {
  const character = new Character();

  return (
    <CharacterContext.Provider value={character}>
      {children}
    </CharacterContext.Provider>
  );
}
