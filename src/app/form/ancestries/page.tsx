"use client";

import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { toast } from "sonner";
import { CharacterContext } from "~/helpers/characterContext";
// import { saveCharacter } from "~/helpers/localStorage";
import { ANCESTRY_TRAITS } from "~/constants";
import { Ancestry } from "~/types";

const ALL_ANCESTRIES = Object.keys(ANCESTRY_TRAITS);

export default function AncestriesPage() {
  const character = useContext(CharacterContext);
  const router = useRouter();
  const [firstAncestry, setFirstAncestry] = useState<Ancestry | "">("");
  const [secondAncestry, setSecondAncestry] = useState<Ancestry | "">("");

  function handleSubmit(e: any) {
    e.preventDefault();

    if (firstAncestry === "" && secondAncestry === "") {
      toast.error("Hey! You have to pick at least ONE ancestry!");
    }

    if (firstAncestry !== "" && secondAncestry !== "") {
      router.push(
        `/form/ancestries/half-breed?ancestry=${firstAncestry}&ancestry=${secondAncestry}`,
      );
      return;
    }

    const chosenAncestry =
      firstAncestry === ""
        ? (secondAncestry as Ancestry)
        : (firstAncestry as Ancestry);

    character.setSingleAncestry(chosenAncestry);
    // saveCharacter(character);
    router.push("/form/class");
  }

  return (
    <div>
      Choose your Ancestry(s)!
      <form onSubmit={handleSubmit}>
        <select
          value={firstAncestry}
          onChange={(e) => setFirstAncestry(e.target.value as Ancestry)}
          className="capitalize text-black"
        >
          <option value="">--</option>
          {ALL_ANCESTRIES.filter((ancestry) => ancestry != secondAncestry).map(
            (ancestry) => (
              <option key={ancestry} value={ancestry} className="capitalize">
                {ancestry}
              </option>
            ),
          )}
        </select>
        <select
          value={secondAncestry}
          onChange={(e) => setSecondAncestry(e.target.value as Ancestry)}
          className="capitalize text-black"
        >
          <option value="">--</option>
          {ALL_ANCESTRIES.filter((ancestry) => ancestry != firstAncestry).map(
            (ancestry) => (
              <option key={ancestry} value={ancestry} className="capitalize">
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
