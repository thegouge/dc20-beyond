import { db } from "~/server/db";

export default async function HomePage() {
	const posts = await db.query.posts.findMany()

	console.log({ posts })

	return (
		<main className="">
			Hello! Welcome to DC20 Beyond! (WIP)
			{posts.map(post => (
				<div key={post.id}>{post.name}</div>
			))}
		</main>
	);
}
