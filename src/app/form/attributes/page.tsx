"use client";

import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { toast } from "sonner";
import { CharacterContext } from "~/helpers/characterContext";
// import { saveCharacter } from "~/helpers/localStorage";
import { Attributes } from "~/types";

const standardArray = [3, 1, 0, -2];

export default function FormPage() {
  const router = useRouter();
  const character = useContext(CharacterContext);

  const [selectedSA, setSelectedSA] = useState([false, false, false, false]);
  const [attributes, setAttributes] = useState({
    might: { mod: -1, save: false },
    agility: { mod: -1, save: false },
    charisma: { mod: -1, save: false },
    intelligence: { mod: -1, save: false },
    prime: { mod: 3, save: false },
  });
  const [maxSaves, setMaxSaves] = useState(false);
  const [bonus1, setBonus1] = useState<Attributes | "--">("--");
  const [bonus2, setBonus2] = useState<Attributes | "--">("--");

  function selectAttribute(value: string, stat: Attributes) {
    const valueInt = parseInt(value);
    let prev = attributes[stat].mod;

    const newAttributes = { ...attributes };
    newAttributes[stat].mod = valueInt;

    setAttributes(newAttributes);

    // code for excluding the choice from the list here
    const selectedIndex = standardArray.indexOf(valueInt);
    const tmp = [...selectedSA];

    tmp[selectedIndex] = true;

    const prevIndex = standardArray.indexOf(prev);
    if (prevIndex >= 0) {
      tmp[prevIndex] = false;
    }

    setSelectedSA(tmp);
  }

  function resetSelections() {
    setAttributes({
      might: { mod: -1, save: false },
      agility: { mod: -1, save: false },
      charisma: { mod: -1, save: false },
      intelligence: { mod: -1, save: false },
      prime: { mod: 3, save: false },
    });
    setSelectedSA([false, false, false, false]);
  }

  function handleSaveChange(
    type: "might" | "agility" | "charisma" | "intelligence",
  ) {
    const newlySelected = { ...attributes };
    newlySelected[type].save = !attributes[type].save;

    const numSelected = Object.values(newlySelected).filter(
      (value) => value.save,
    ).length;

    if (numSelected >= 2) {
      setMaxSaves(true);
    } else {
      setMaxSaves(false);
    }

    setAttributes(newlySelected);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    const attributesArray = Object.keys(attributes) as Attributes[]
    const hasAnyUnselectedAttr = attributesArray.some((attrName) => attributes[attrName].mod === -1)
    const numSelectedSaves = attributesArray.filter((attrName) => attributes[attrName].save).length

    if (hasAnyUnselectedAttr) {
      toast.error("Hey! You need to select values for all 4 attributes!")
      return;
    }

    if (numSelectedSaves < 2) {
      toast.error("Hey! you need to select two attributes to have proficiency in!")
      return
    }

    if (bonus1 === "--" || bonus2 === "--") {
      toast.error("Hey! you've got to select your bonus points!");
      return;
    }

    character.setAttributes({
      ...attributes,
      bonuses: [bonus1 as Attributes, bonus2 as Attributes],
    });

    // saveCharacter(character);
    router.push("/form/background");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Character Attributes</h2>
      <div className="mb-3">
        <button className="outline-button" onClick={resetSelections}>
          reset choices
        </button>
      </div>
      <div className="m-4 flex w-1/2 justify-between">
        <div className="text-center">
          <label htmlFor="mightSelector" className="block">
            Might
          </label>
          <select
            name="mightSelector"
            value={attributes.might.mod}
            onChange={(e) => {
              selectAttribute(e.target.value, "might");
            }}
            className="text-black"
          >
            <option value="">--</option>
            {selectedSA.map((isSelected, i) => (
              <option
                key={standardArray[i]}
                disabled={isSelected}
                value={standardArray[i]}
              >
                {standardArray[i]}
              </option>
            ))}
          </select>
          <label className="block">
            Save:
            <input
              className="ml-2"
              type="checkbox"
              disabled={!attributes.might.save && maxSaves}
              checked={attributes.might.save}
              onChange={() => handleSaveChange("might")}
            />
          </label>
        </div>
        <div className="text-center">
          <label htmlFor="agiSelector" className="block">
            Agility
          </label>
          <select
            name="agiSelector"
            value={attributes.agility.mod}
            onChange={(e) => {
              selectAttribute(e.target.value, "agility");
            }}
            className="text-black"
          >
            <option value="">--</option>
            {selectedSA.map((isSelected, i) => (
              <option
                key={standardArray[i]}
                disabled={isSelected}
                value={standardArray[i]}
              >
                {standardArray[i]}
              </option>
            ))}
          </select>
          <label className="block">
            Save:
            <input
              className="ml-2"
              type="checkbox"
              disabled={!attributes.agility.save && maxSaves}
              checked={attributes.agility.save}
              onChange={() => handleSaveChange("agility")}
            />
          </label>
        </div>
        <div className="text-center">
          <label htmlFor="chaSelector" className="block">
            Charisma
          </label>
          <select
            name="chaSelector"
            value={attributes.charisma.mod}
            onChange={(e) => {
              selectAttribute(e.target.value, "charisma");
            }}
            className="text-black"
          >
            <option value="">--</option>
            {selectedSA.map((isSelected, i) => (
              <option
                key={standardArray[i]}
                disabled={isSelected}
                value={standardArray[i]}
              >
                {standardArray[i]}
              </option>
            ))}
          </select>
          <label className="block">
            Save:
            <input
              className="ml-2"
              type="checkbox"
              disabled={!attributes.charisma.save && maxSaves}
              checked={attributes.charisma.save}
              onChange={() => handleSaveChange("charisma")}
            />
          </label>
        </div>
        <div className="text-center">
          <label htmlFor="intSelector" className="block">
            Intelligence
          </label>
          <select
            name="intSelector"
            value={attributes.intelligence.mod}
            onChange={(e) => {
              selectAttribute(e.target.value, "intelligence");
            }}
            className="text-black "
          >
            <option value="">--</option>
            {selectedSA.map((isSelected, i) => (
              <option
                key={standardArray[i]}
                disabled={isSelected}
                value={standardArray[i]}
              >
                {standardArray[i]}
              </option>
            ))}
          </select>
          <label className="block">
            Save:
            <input
              className="ml-2"
              type="checkbox"
              disabled={!attributes.intelligence.save && maxSaves}
              checked={attributes.intelligence.save}
              onChange={() => handleSaveChange("intelligence")}
            />
          </label>
        </div>
      </div>
      <div>Bonus points!</div>
      <div className="my-3 flex w-1/2 justify-around">
        <select
          className="text-black"
          value={bonus1}
          onChange={(e) => setBonus1(e.target.value as Attributes)}
        >
          <option value="--">--</option>
          {Object.keys(attributes)
            .filter((key) => attributes[key].mod !== 3)
            .map((key) => {
              return (
                <option key={`${key}-option`} value={key}>
                  {key}
                </option>
              );
            })}
        </select>
        <select
          className="text-black"
          value={bonus2}
          onChange={(e) => setBonus2(e.target.value as Attributes)}
        >
          <option value="">--</option>
          {Object.keys(attributes)
            .filter((key) => attributes[key].mod !== 3)
            .map((key) => {
              return (
                <option key={`${key}-option`} value={key}>
                  {key}
                </option>
              );
            })}
        </select>
      </div>
      <button className="outline-button my-3" type="submit">
        Submit
      </button>
    </form>
  );
}
