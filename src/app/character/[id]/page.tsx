import CharacterSheet from "~/app/_components/CharacterSheet";
import { CharDBtoCharacter } from "~/helpers/calculators";
import { getCharacterById } from "~/server/db";
import { Character } from "~/types";

type PropTypes = {
  params: { id: string };
};

export default async function Page({ params }: PropTypes) {
  const dbCharacter = await getCharacterById(parseInt(params.id));
  const character = CharDBtoCharacter(dbCharacter)

  return (
      <CharacterSheet character={character} />
  );
}
