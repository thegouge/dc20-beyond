"use client";

import { useContext, useState } from "react";
import { CharacterContext } from "~/helpers/characterContext";

export default function BackgroundPage() {
  const character = useContext(CharacterContext);
  const [skillPoints, setSkillPoints] = useState(5 + character.intelligence);

  return (
    <div>
      Background!
      <br />
      skill points: {skillPoints}
      <br />
      Name: {character.name}
      <br />
      Player: {character.playerName}
      <br />
      Prime: {character.prime}
      <br />
      Might: {character.might}
      <br />
      Agility: {character.agility}
      <br />
      Charisma: {character.charisma}
      <br />
      Intelligence: {character.intelligence}
      <br />
      Saves: {character.attributeSaveMasteries}
    </div>
  );
}
