"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import AncestryTraitPicker from "~/components/AncestryTraitPicker";
import { ANCESTRY_TRAITS } from "~/constants";
import { Ancestry, AncestryTrait } from "~/types";

export default function HalfBreedForm() {
  const router = useRouter();
  const queryParams = useSearchParams();
  const [firstAncestry, secondAncestry] = queryParams.getAll(
    "ancestry",
  ) as Ancestry[];

  if (firstAncestry === undefined || secondAncestry === undefined) {
    router.back();
    return;
  }

  const [ancestryPoints, setAncestryPoints] = useState(5);
  const [selectedTraits, setSelectedTraits] = useState<AncestryTrait[]>([]);
  const firstAncestryTraits = ANCESTRY_TRAITS[firstAncestry];
  const secondAncestryTraits = ANCESTRY_TRAITS[secondAncestry];

  function handleToggle(isToggled: boolean, index: number, isFirst: boolean) {
    let ancestryTrait: AncestryTrait;

    if (isFirst) {
      ancestryTrait = firstAncestryTraits[index] as AncestryTrait;
    } else {
      ancestryTrait = secondAncestryTraits[index] as AncestryTrait;
    }

    if (isToggled) {
      setAncestryPoints(ancestryPoints - ancestryTrait.cost);
      setSelectedTraits([...selectedTraits, ancestryTrait]);
    } else {
      setAncestryPoints(ancestryPoints + ancestryTrait.cost);
      setSelectedTraits(
        selectedTraits.filter((trait) => trait.name != ancestryTrait.name),
      );
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log({ selectedTraits });
  }

  return (
    <form onSubmit={handleSubmit}>
      Pick yer Traits!
      <br />
      Remaining Ancestry Points: {ancestryPoints}
      <div className="justify-even flex">
        <div>
          <h2>Traits for {firstAncestry}</h2>
          {firstAncestryTraits.map((trait, i) => (
            <AncestryTraitPicker
              trait={trait}
              toggleAttribute={(isToggled) => handleToggle(isToggled, i, true)}
            />
          ))}
        </div>
        <div>
          <h2>Traits for {secondAncestry}</h2>
          {secondAncestryTraits.map((trait, i) => (
            <AncestryTraitPicker
              trait={trait}
              toggleAttribute={(isToggled) => handleToggle(isToggled, i, false)}
            />
          ))}
        </div>
      </div>
      <button type="submit" className="outline-button">
        Submit
      </button>
    </form>
  );
}
