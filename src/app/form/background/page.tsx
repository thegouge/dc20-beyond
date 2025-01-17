"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useState } from "react";
import { toast } from "sonner";
import { SKILL_MASTERY_LEVELS, SKILL_NAMES } from "~/constants";
import { CharacterContext } from "~/helpers/characterContext";
// import { saveCharacter } from "~/helpers/localStorage";
import {
  Attributes,
  SkillLevelList,
  SkillLevels,
} from "~/types";

export default function BackgroundPage() {
  const character = useContext(CharacterContext);
  const router = useRouter();
  const [skillPoints, setSkillPoints] = useState(5 + character.intelligence);
  // TODO: use 'useSearchParams'

  function calculateSkillMod(
    name: SKILL_NAMES,
    attribute: Attributes | "knowledge",
  ): number {
    const skillLevel = character.skillMasteries[attribute][name] || 0;
    const proficiencyMod = SKILL_MASTERY_LEVELS[skillLevel] || 0;

    if (attribute === "knowledge") {
      return character.intelligence + proficiencyMod;
    }
    return character[attribute] + proficiencyMod;
  }

  function toggleSkill(name: SKILL_NAMES, attribute: Attributes | "knowledge") {
    const curr =
      character.skillMasteries[attribute as keyof SkillLevelList][
        name as keyof SkillLevels
      ];
    if (curr === undefined || curr > 0) {
      character.skillMasteries[attribute][name] = 0;
      if (attribute === "knowledge") {
        setSkillPoints(skillPoints + 0.5);
      } else {
        setSkillPoints(skillPoints + 1);
      }
    } else {
      character.skillMasteries[attribute][name] = 1;
      if (attribute === "knowledge") {
        setSkillPoints(skillPoints - 0.5);
      } else {
        setSkillPoints(skillPoints - 1);
      }
    }
  }

  const skillMasteryList = Object.keys(
    character.skillMasteries,
  ) as Attributes[];

  function handleSubmit(e: any) {
    e.preventDefault();

    if (skillPoints < 0) {
      toast.error("Hey! you can't spend that many skill points!");
      return;
    } else if (skillPoints > 0) {
      // TODO: transfer any unused skill points into trade points
      toast.error(
        "Spend all your skill points! I don't have a way to transfer skill points to trades yet!",
      );
      return;
    } else {
      // saveCharacter(character);
      router.push("/form/background/trades");
    }
  }

  return (
    <div>
      Background! Remaining Skill Points: {skillPoints}
      <form onSubmit={handleSubmit}>
        {skillMasteryList.map((attribute: Attributes) => {
          const skillList = Object.keys(
            character.skillMasteries[attribute],
          ) as SKILL_NAMES[];
          return (
            <div>
              <div>{attribute}</div>
              {skillList.map((skillName: SKILL_NAMES) => {
                return (
                  <label>
                    {skillName}: {calculateSkillMod(skillName, attribute)}
                    <input
                      type="checkbox"
                      name={skillName}
                      onChange={() => toggleSkill(skillName, attribute)}
                    />
                  </label>
                );
              })}
            </div>
          );
        })}

        <button className="outline-button my-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
