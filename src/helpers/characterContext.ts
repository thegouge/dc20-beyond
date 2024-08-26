import { createContext } from "react";
import { Character } from "~/types";

const character = new Character();
export const CharacterContext = createContext(character);
