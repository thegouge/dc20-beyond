"use client";

import React, { useContext, useState } from "react";
import { CLASSES } from "~/constants";
import { CharacterContext } from "~/helpers/characterContext";
import { PlayerClasses } from "~/types";
import "~/styles/traits.css";

const ALL_CLASSES = Object.keys(CLASSES)

export default function ClassPage() {
  const character = useContext(CharacterContext);
  const [chosenClass, setChosenClass] = useState("")

  function toggleSelected(chosen: string) {
    if (chosenClass === chosen) {
      setChosenClass("")
    } else {
      setChosenClass(chosen)
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault()

    console.log({ chosenClass })
  }

  return (
    <div>
      <h2>Class!</h2>
      <form onSubmit={handleSubmit}>
        {ALL_CLASSES.map((className: string) => {
          const currClass = CLASSES[className as PlayerClasses]
          return (<div key={className} className={chosenClass === className ? "trait-selector selected" : "trait-selector unselected"} onClick={() => toggleSelected(className)}>
            <h3>{currClass.name}</h3>
            <p>{currClass.description}</p>
          </div>)
        })
        }
        <button type="submit" className="outline-button">Submit</button>
      </form>
    </div>
  );
}
