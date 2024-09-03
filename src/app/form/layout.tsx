"use client";

import { Character } from "~/types";
import { CharacterContext } from "~/helpers/characterContext";
// import { useEffect } from "react";
// import { saveCharacter } from "~/helpers/localStorage";

export default function FormLayout({ children }: any) {
  const character = new Character();

  // useEffect(() => {
  //   const savedCharacter = window.localStorage.getItem("saved-character");
  //
  //   if (!savedCharacter) {
  //     console.log("no character found");
  //     saveCharacter(character);
  //   } else {
  //     console.log("loading character...");
  //     character.loadSavedCharacter(JSON.parse(savedCharacter));
  //   }
  // });
  //
  // console.log({ character });

  return (
    <CharacterContext.Provider value={character}>
      {children}
    </CharacterContext.Provider>
  );
}
