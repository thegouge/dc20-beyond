"use client";

import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { CharacterContext } from "~/helpers/characterContext";
import { ALL_LANGS } from "~/types";

export default function langs() {
  const router = useRouter();
  const character = useContext(CharacterContext);

  const [langPoints, setlangPoints] = useState(2);
  const [selectedlangs, setSelectedlangs] = useState<string[]>([]);

  function togglelang(name: string) {
    const langIndex = selectedlangs.indexOf(name);
    if (langIndex < 0) {
      setSelectedlangs([...selectedlangs, name]);
      setlangPoints(langPoints - 1);
    } else {
      setSelectedlangs(selectedlangs.filter((lang) => name !== lang));
      setlangPoints(langPoints + 1);
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    if (langPoints < 0) {
      console.log("Hey! you can't spend that many lang points!");
    } else if (langPoints > 0) {
      // TODO: transfer any unused lang points into language points
      console.log(
        "Spend all your lang points! I don't have a way to transfer lang points to languages yet!",
      );
    } else {
      character.setLanguages(selectedlangs);
      router.push("/form/ancestries");
    }
  }

  return (
    <div>
      langs! Remaining lang Points: {langPoints}
      <form onSubmit={handleSubmit}>
        {ALL_LANGS.map((langObj) => {
          return (
            <label>
              {langObj.name}:
              <input
                type="checkbox"
                name={langObj.name}
                onChange={() => togglelang(langObj.name)}
              />
            </label>
          );
        })}
        <button className="outline-button my-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
