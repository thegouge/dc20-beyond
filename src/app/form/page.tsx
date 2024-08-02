import Attributes from "~/app/_components/form/Attributes";

export default function Form() {
  const fromSteps = [
    "Attributes", // attributes & saves
    "Background", // skills, trades, languages
    "Ancestry",
    "Class",
    "Weapons",
  ];

  const aggregate = {};

  function advance(stage, payload) {
    aggregate[stage] = payload;
    console.log({ aggregate });
  }

  return (
    <main>
      <Attributes advance={(e) => advance("attributes", e)} />
    </main>
  );
}
