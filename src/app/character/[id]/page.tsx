import CharacterSheet from "~/components/CharacterSheet";
import { CharDBtoCharacter } from "~/helpers/calculators";
import { getCharacterById } from "~/server/db";

type PropTypes = {
  params: { id: string };
};

export default async function Page({ params }: PropTypes) {
  const dbCharacter = await getCharacterById(parseInt(params.id));
  const character = CharDBtoCharacter(dbCharacter);

  return <CharacterSheet character={character} />;
}
