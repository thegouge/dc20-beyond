import { db } from "~/server/db";

export const dynamic = "force-dynamic"

export default async function HomePage() {
	const posts = await db.query.posts.findMany()

	return (
		<main className="">
			Hello! Welcome to DC20 Beyond! (WIP)
			{posts.map(post => (
				<div key={post.id}>{post.name}</div>
			))}
		</main>
	);
}
