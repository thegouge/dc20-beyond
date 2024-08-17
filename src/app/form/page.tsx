"use client";

import { useState } from "react";
import Attributes from "~/app/_components/form/Attributes";
import { Character } from "~/types";

export default function Form() {
  const formSteps = [
    "Attributes", // attributes & saves
    "Background", // skills, trades, languages
    "Ancestry",
    "Class",
    "Weapons",
  ];

  const [character] = useState<Character>(new Character());

  function advance(type: string, payload: any) {
    switch (type) {
      case "attributes":
        character.setAttributes(payload);
        break;

      case "background":
        character.setBackground(payload);
        break;

      case "ancestry":
        character.setAncestry(payload);
        break;

      case "class":
        character.setClass(payload);
        break;

      case "equipment":
        character.setEquipment(payload);
        break;

      default:
        break;
    }
  }

  return (
    <main>
      <Attributes advance={(e: any) => advance("attributes", e)} />
    </main>
  );
}
