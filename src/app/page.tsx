import CharacterSheet from "~/components/CharacterSheet";
import { db } from "~/server/db";
import { Character } from "~/types"

export const dynamic = "force-dynamic"

export default async function HomePage() {
	const characters =  await db.query.characters.findMany({
		orderBy: (model, {desc}) => desc(model.createdAt)
	})

	return (
		<main className="px-6">
			<span className="block mb-4">Hello! Welcome to DC20 Beyond! (WIP)</span>
			<div className="flex flex-wrap justify-between">
			{characters.map((character)=>(
			<div key={character.id} className="char-blurb p-6 bg-gray-50 text-black w-80 rounded">
					<div>{character.char_name}</div>
					<span className="char-slugline">Level: {character.char_level} | {character.char_ancestry} | {character.char_class}</span>
				</div>
			))}
			</ div>
		</main>
	);
}
