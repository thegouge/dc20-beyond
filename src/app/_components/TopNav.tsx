import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function TopNav() {
	return (
		<nav className="mb-8 flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
			<div className="links flex w-1/4 items-center justify-between">
				<Link href="/">Character Sheet</Link>
				<Link href="/form">Form</Link>
			</div>
			{/*<div>
				<SignedOut>
					<SignInButton />
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>*/}
		</nav>
	);
}
