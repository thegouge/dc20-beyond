import Attributes from "~/app/_components/Attributes";

export default function Form() {
	const fromSteps = [
		"Attributes", // attributes & saves
		"Background", // skills, trades, languages
		"Ancestry",
		"Class",
		"Weapons",
	];
	return (
		<main>
			<Attributes />
		</main>
	);
}
