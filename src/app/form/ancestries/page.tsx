"use client";

import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { CharacterContext } from "~/helpers/characterContext";
// import { saveCharacter } from "~/helpers/localStorage";
import { ALL_ANCESTRIES } from "~/types";

export default function AncestriesPage() {
  const character = useContext(CharacterContext);
  const router = useRouter();
  const [ancestryPoints, setAncestryPoints] = useState(5);
  const [firstAncestry, setFirstAncestry] = useState("");
  const [secondAncestry, setSecondAncestry] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();

    character.setAncestry({});
    // saveCharacter(character);
    // router.push("/form/class");
  }
  return (
    <div>
      Choose your Ancestry(s)!
      <form onSubmit={handleSubmit}>
        <select
          value={firstAncestry}
          onChange={(e) => setFirstAncestry(e.target.value)}
          className="text-black"
        >
          <option value="">--</option>
          {ALL_ANCESTRIES.filter((ancestry) => ancestry != secondAncestry).map(
            (ancestry) => (
              <option key={ancestry} value={ancestry}>
                {ancestry}
              </option>
            ),
          )}
        </select>
        <select
          value={secondAncestry}
          onChange={(e) => setSecondAncestry(e.target.value)}
          className="text-black"
        >
          <option value="">--</option>
          {ALL_ANCESTRIES.filter((ancestry) => ancestry != firstAncestry).map(
            (ancestry) => (
              <option key={ancestry} value={ancestry}>
                {ancestry}
              </option>
            ),
          )}
        </select>
        <button type="submit" className="outline-button my-3">
          {firstAncestry !== "" && secondAncestry !== ""
            ? "Continue"
            : "Submit"}
        </button>
      </form>
    </div>
  );
}
