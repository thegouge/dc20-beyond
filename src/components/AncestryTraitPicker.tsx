import { useState } from "react";
import { AncestryTrait } from "~/types";
import "~/styles/traits.css";

type PropType = {
  trait: AncestryTrait;
  toggleAttribute: (value: boolean) => void;
};

export default function AncestryTraitPicker({
  trait,
  toggleAttribute,
}: PropType) {
  const [isSelected, setSelected] = useState(false);

  function handleClick() {
    setSelected(!isSelected);
    toggleAttribute(!isSelected);
  }

  return (
    <div
      className={
        isSelected ? "trait-selector selected" : "trait-selector unselected"
      }
      onClick={handleClick}
    >
      <h3>
        {trait.name} {trait.cost ? `(${trait.cost})` : ""}
      </h3>
      <p>{trait.description}</p>
    </div>
  );
}
