"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import AncestryTraitPicker from "~/components/AncestryTraitPicker";
import { ANCESTRY_TRAITS } from "~/constants";
import { Ancestry } from "~/types";

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
  const firstAncestryTraits = ANCESTRY_TRAITS[firstAncestry];
  const secondAncestryTraits = ANCESTRY_TRAITS[secondAncestry];

  return (
    <form className="justify-even flex">
      <div>
        <h2>Traits for {firstAncestry}</h2>
        {firstAncestryTraits.map((trait) => (
          <AncestryTraitPicker trait={trait} />
        ))}
      </div>
      <div>
        <h2>Traits for {secondAncestry}</h2>
        {secondAncestryTraits.map((trait) => (
          <AncestryTraitPicker trait={trait} />
        ))}
      </div>
    </form>
  );
}
