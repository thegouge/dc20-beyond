import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
	const characters = await db.query.characters.findMany({
		orderBy: (model, { desc }) => desc(model.createdAt),
	});

	return (
		<main className="px-6">
			<span className="mb-4 block">Hello! Welcome to DC20 Beyond! (WIP)</span>
			<div className="flex flex-wrap justify-between">
				{characters.map((character) => (
					<Link
						key={character.id}
						className="char-blurb w-80 rounded bg-gray-50 p-6 text-black"
						href={`/character/${character.id}`}
					>
						<div>{character.char_name}</div>
						<span className="char-slugline">
							Level: {character.char_level} | {character.char_ancestry} |{" "}
							{character.char_class}
						</span>
					</Link>
				))}
			</div>
		</main>
	);
}
