"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useState } from "react";
import { toast } from "sonner";
import AncestryTraitPicker from "~/components/AncestryTraitPicker";
import { ANCESTRY_TRAITS } from "~/constants";
import { CharacterContext } from "~/helpers/characterContext";
import { Ancestry, AncestryTrait } from "~/types";

export default function HalfBreedForm() {
  const router = useRouter();
  const character = useContext(CharacterContext);
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
    if (firstAncestry === undefined || secondAncestry === undefined) {
      router.back();
      return;
    }

    e.preventDefault();
    if (ancestryPoints > 0) {
      toast.error(
        "Please choose Ancestries until you have 0 ancestry points! (The cost of each attribute is in parenthesis)",
      );
      return;
    }
    if (ancestryPoints < 0) {
      toast.error(
        "Please remove Ancestries until you have 0 ancestry points! (The cost of each attribute is in parenthesis)",
      );
      return;
    }

    const numFlavor = selectedTraits.filter((trait) => trait.cost === 0);
    if (numFlavor.length !== 1) {
      toast.error(
        'Please choose exactly one (1) "Flavor attribute" (you\'ll find them at the bottom of each attribute list)',
      );
      return;
    }

    character.setHybridAncestry(
      [firstAncestry, secondAncestry],
      selectedTraits,
    );
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
