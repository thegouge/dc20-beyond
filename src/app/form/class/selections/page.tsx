"use client";

import { useContext } from "react";
import { CharacterContext } from "~/helpers/characterContext";
import { useRouter } from "next/navigation";
import { MANEUVERS } from "~/constants";
import { Maneuver } from "~/types";

export default function MartialForm() {
  const router = useRouter();
  const character = useContext(CharacterContext);

  if (character.charClass === "") {
    router.replace("/form/class");
  }

  function toggleSelected(selection: any) { }

  if (character.charClassType === "martial") {
    return (
      <div>
        {Object.keys(MANEUVERS).map((maneuverCat: string) => {
          return (
            <div>
              <h2 className="capitalize">{maneuverCat} maneuvers</h2>
              <div>
                {MANEUVERS?.[maneuverCat]?.map((maneuver: Maneuver) => {
                  return (
                    <div
                      key={maneuver.name}
                      className="trait-selector"
                      onClick={() => toggleSelected(maneuver)}
                    >
                      <h3>{maneuver.name}</h3>
                      <div>
                        AP: {maneuver.ap}
                        <br />
                        SP: {maneuver.sp}
                      </div>
                      <p>{maneuver.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  } else if (character.charClassType === "spellcaster") {
    return <div>Spellcasting!</div>;
  }

  return (
    <div>
      {character.charClassType} class selections for a {character.charClass}!
    </div>
  );
}
