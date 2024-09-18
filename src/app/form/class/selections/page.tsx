"use client";

import { useContext } from "react";
import { CharacterContext } from "~/helpers/characterContext";
import { useRouter } from "next/navigation";

export default function MartialForm() {
  const router = useRouter();
  const character = useContext(CharacterContext);

  if (character.charClass === "") {
    router.back()
  }

  return <div>Martial class selections for a {character.charClass}!</div>;
}
