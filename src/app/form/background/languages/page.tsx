"use client";

import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { toast } from "sonner";
import { ALL_LANGS } from "~/constants";
import { CharacterContext } from "~/helpers/characterContext";
// import { saveCharacter } from "~/helpers/localStorage";
import { OtherPro } from "~/types";

export default function langs() {
  const router = useRouter();
  const character = useContext(CharacterContext);

  const [langPoints, setlangPoints] = useState(2);
  const [selectedLangs, setSelectedlangs] = useState<OtherPro[]>(ALL_LANGS);

  function toggleLang(langIndex: number) {
    const langObj = selectedLangs[langIndex];

    if (langObj === undefined) {
      console.log(
        "something went wrong toggling the knowlege for index:",
        langIndex,
      );
      return;
    }
    let newLevel: number;

    if (langObj?.level === 0) {
      setlangPoints(langPoints - 1);
      newLevel = 1;
    } else {
      if (langObj.level > 1) {
        setlangPoints(langPoints + 2);
      } else {
        setlangPoints(langPoints + 1);
      }

      newLevel = 0;
    }

    setSelectedlangs(
      selectedLangs.map((lang, i) => {
        if (i === langIndex) {
          return { ...langObj, level: newLevel };
        }
        return lang;
      }),
    );
  }

  function toggleFluency(langIndex: number) {
    const langObj = selectedLangs[langIndex];

    if (langObj === undefined) {
      console.log(
        "something went wrong toggling the fluency for index:",
        langIndex,
      );
      return;
    }

    let newLevel: number;

    if (langObj.level < 2) {
      if (langObj.level === 1) {
        setlangPoints(langPoints - 1);
      } else {
        setlangPoints(langPoints - 2);
      }
      newLevel = 2;
    } else {
      setlangPoints(langPoints + 1);
      newLevel = 1;
    }

    setSelectedlangs(
      selectedLangs.map((lang, i) => {
        if (i === langIndex) {
          return { ...langObj, level: newLevel };
        }
        return lang;
      }),
    );
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    if (langPoints < 0) {
      toast.error("Hey! you can't spend that many lang points!");
      return;
    } else if (langPoints > 0) {
      toast.error("Spend all your lang points!");
    } else {
      character.setLanguages(selectedLangs);
      // saveCharacter(character);
      router.push("/form/ancestries");
    }
  }

  return (
    <div>
      langs! Remaining lang Points: {langPoints}
      <form onSubmit={handleSubmit}>
        {selectedLangs.map((langObj, i) => {
          return (
            <label key={langObj.name} className="capitalize">
              {langObj.name}:
              <input
                type="checkbox"
                name={langObj.name}
                checked={langObj.level > 0}
                onChange={() => toggleLang(i)}
              />
              <input
                type="checkbox"
                name={`${langObj.name}Fluency`}
                checked={langObj.level > 1}
                onChange={() => toggleFluency(i)}
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
