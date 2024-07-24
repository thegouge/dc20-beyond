"use client";

import { ChangeEvent, useState } from "react";

type PropTypes = {};

const standardArray = [3, 1, 0, -2];

export default function Attributes() {
  const [selectedSA, setSelectedSA] = useState([false, false, false, false]);
  const [might, setMight] = useState(0);

  function selectAttribute(value: string, stat: string) {
    if (stat === "might") {
      setMight(parseInt(value));
    }
  }

  return (
    <div>
      <h2>Character Attributes</h2>
      <div className="flex">
        <div>
          Might
          <select
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
        <div>Agility</div>
        <div>Charisma</div>
        <div>Intelligence</div>
      </div>
    </div>
  );
}
