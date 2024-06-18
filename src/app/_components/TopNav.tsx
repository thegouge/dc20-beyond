import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function TopNav() {
	return (
		<nav className="mb-8 flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
			<div className="links flex w-1/4 items-center justify-between">
				<div>Character Sheet</div>
				<div>Form</div>
			</div>
			<div>
				<SignedOut>
					<SignInButton />
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>
		</nav>
	);
}
