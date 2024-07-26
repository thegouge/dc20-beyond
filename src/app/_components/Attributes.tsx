"use client";

import { ChangeEvent, useState } from "react";

type PropTypes = {};

const standardArray = [3, 1, 0, -2];

export default function Attributes() {
  const [selectedSA, setSelectedSA] = useState([false, false, false, false]);
  const [might, setMight] = useState(-1);
  const [agility, setAgi] = useState(-1);
  const [charisma, setCha] = useState(-1);
  const [intelligence, setInt] = useState(-1);

  function selectAttribute(value: string, stat: string) {
    const valueInt = parseInt(value);
    let prev: number;

    switch (stat) {
      case "might":
        prev = might;
        setMight(valueInt);
        break;

      case "agility":
        prev = agility;
        setAgi(valueInt);
        break;

      case "charisma":
        prev = charisma;
        setCha(valueInt);
        break;

      case "intelligence":
        prev = intelligence;
        setInt(valueInt);
        break;

      default:
        prev = -1;
        break;
    }

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
    setMight(-1);
    setAgi(-1);
    setCha(-1);
    setInt(-1);
    setSelectedSA([false, false, false, false]);
  }

  return (
    <div>
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
            value={might}
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
        </div>
        <div className="text-center">
          <label htmlFor="agiSelector" className="block">
            Agility
          </label>
          <select
            name="agiSelector"
            value={agility}
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
        </div>
        <div className="text-center">
          <label htmlFor="chaSelector" className="block">
            Charisma
          </label>
          <select
            name="chaSelector"
            value={charisma}
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
        </div>
        <div className="text-center">
          <label htmlFor="intSelector" className="block">
            Intelligence
          </label>
          <select
            name="intSelector"
            value={intelligence}
            onChange={(e) => {
              selectAttribute(e.target.value, "intelligence");
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
        </div>
      </div>
      <div>
        <input className="outline-button my-3" type="submit" />
      </div>
    </div>
  );
}
