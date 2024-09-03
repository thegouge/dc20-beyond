"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function HalfBreedForm() {
  const queryParams = useSearchParams();
  const ancestries = queryParams.getAll("ancestry");

  const [ancestryPoints, setAncestryPoints] = useState(5);

  return (
    <form>
      <div>
        you're trying to be a half {ancestries[0]} half {ancestries[1]}
      </div>
      <div>
        But, I don't have a system for doing that just yet, so please{" "}
        <Link href="/form/ancestries" className="outline-button">
          Go Back
        </Link>
        and select just one ancestry for now
      </div>
    </form>
  );
}
