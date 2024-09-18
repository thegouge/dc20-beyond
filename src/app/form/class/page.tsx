"use client";

import React, { useContext, useState } from "react";
import { CLASSES } from "~/constants";
import { CharacterContext } from "~/helpers/characterContext";
import { PlayerClasses } from "~/types";
import "~/styles/traits.css";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const ALL_CLASSES = Object.keys(CLASSES);

export default function ClassPage() {
  const router = useRouter();
  const character = useContext(CharacterContext);
  const [chosenClass, setChosenClass] = useState<PlayerClasses | "">("");

  function toggleSelected(chosen: PlayerClasses) {
    if (chosenClass === chosen) {
      setChosenClass("");
    } else {
      setChosenClass(chosen);
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    if (chosenClass === "") {
      toast.error("Hey! You have to select a class to continue!");
      return;
    }

    const classType = CLASSES[chosenClass].type;
    character.setClass(chosenClass, classType);

    router.push("/form/class/selections");
  }

  return (
    <div>
      <h2>Class!</h2>
      <form onSubmit={handleSubmit}>
        {ALL_CLASSES.map((className: string) => {
          const currClass = CLASSES[className as PlayerClasses];
          return (
            <div
              key={className}
              className={
                chosenClass === className
                  ? "trait-selector selected"
                  : "trait-selector unselected"
              }
              onClick={() => toggleSelected(className as PlayerClasses)}
            >
              <h3>{currClass.name}</h3>
              <p>{currClass.description}</p>
            </div>
          );
        })}
        <button type="submit" className="outline-button">
          Submit
        </button>
      </form>
    </div>
  );
}
