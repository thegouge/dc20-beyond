"use client";

import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { toast } from "sonner";
import { CharacterContext } from "~/helpers/characterContext";
// import { saveCharacter } from "~/helpers/localStorage";
import { ALL_ANCESTRIES } from "~/types";

export default function AncestriesPage() {
  const character = useContext(CharacterContext);
  const router = useRouter();
  const [firstAncestry, setFirstAncestry] = useState("");
  const [secondAncestry, setSecondAncestry] = useState("");

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
      firstAncestry === "" ? secondAncestry : firstAncestry;

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
          onChange={(e) => setFirstAncestry(e.target.value)}
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
          onChange={(e) => setSecondAncestry(e.target.value)}
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
