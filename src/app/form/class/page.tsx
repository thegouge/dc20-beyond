"use client";

import React, { useContext } from "react";
import { CharacterContext } from "~/helpers/characterContext";

export default function ClassPage() {
  const character = useContext(CharacterContext);

  return (
    <div>
      Class!
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
      <br />
      Skills: {JSON.stringify(character.skillMasteries)}
      <br />
      Trades: {JSON.stringify(character.trades)}
      <br />
      Languages: {JSON.stringify(character.languages)}
      <br />
    </div>
  );
}
