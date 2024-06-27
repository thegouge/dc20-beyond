import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function CharacterFetch() {
	const characters = await db.query.characters.findMany({
		orderBy: (model, { desc }) => desc(model.createdAt),
	});
	return (
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
	);
}

export default async function HomePage() {
	return (
		<main className="px-6">
			<h2 className="mb-4 block">Hello! Welcome to DC20 Beyond! (WIP)</h2>
			<SignedOut>
				<div className="h-full w-full text-2xl">Please sign in above</div>
			</SignedOut>
			<SignedIn>
				<CharacterFetch />
			</SignedIn>
		</main>
	);
}
