"use client";

import { useState } from "react";
import Attributes from "~/app/_components/form/Attributes";

export default function Form() {
  const fromSteps = [
    "Attributes", // attributes & saves
    "Background", // skills, trades, languages
    "Ancestry",
    "Class",
    "Weapons",
  ];

  const [aggregate, setAggregate] = useState({});

  function advance(type, e) {
    console.log({ type, e });
  }

  return (
    <main>
      <Attributes advance={(e) => advance("attributes", e)} />
    </main>
  );
}
