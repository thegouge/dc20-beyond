import { Character } from "~/types";

export function saveCharacter(character: Character) {
  console.log("saving character...");
  console.log({ character });
  if (window === undefined) {
    return;
  }
  window.localStorage.setItem("saved-character", JSON.stringify(character));
}
