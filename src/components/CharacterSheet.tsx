"use client";

import { Character } from "~/types";

import "~/styles/character-sheet.css";
import { useState } from "react";
import {
  useCombatMastery,
  useMaxHP,
  useMaxMana,
  useMaxStamina,
  useMysticalDefense,
  usePhysicalDefense,
} from "~/helpers/calculators";
import SkillList from "./SkillList";
import Image from "next/image";

type PropTypes = {
  character: Character;
};

export default function CharacterSheet({ character }: PropTypes) {
  const maxHP = useMaxHP(character);
  const maxStamina = useMaxStamina(character);
  const maxMana = useMaxMana(character);
  const maxRest = character.level + character.might;
  const maxGrit = 2 + character.charisma;
  const combatMastery = useCombatMastery(character);
  const deathThreshold = character.prime * -1;

  const [hp, setHP] = useState(maxHP);
  const [tempHP, setTempHP] = useState(0);
  const [stamina, setStamina] = useState(maxStamina);
  const [mana, setMana] = useState(maxMana);
  const [actionPoints, setActionPoints] = useState({
    box1: true,
    box2: true,
    box3: true,
    box4: true,
  });
  const [exhaustion, setExhaustion] = useState({
    box1: false,
    box2: false,
    box3: false,
    box4: false,
    box5: false,
  });
  const [restPoints, setRest] = useState(maxRest);
  const [gritPoints, setGrit] = useState(maxGrit);

  const handleActionBoxChange = (
    boxName: "box1" | "box2" | "box3" | "box4",
  ) => {
    const updatedCheckedBoxes = {
      ...actionPoints,
      [boxName]: !actionPoints[boxName],
    };
    setActionPoints(updatedCheckedBoxes);
  };

  const handleExhaustionBoxChange = (
    boxName: "box1" | "box2" | "box3" | "box4" | "box5",
  ) => {
    const updatedCheckedBoxes = {
      ...exhaustion,
      [boxName]: !exhaustion[boxName],
    };
    setExhaustion(updatedCheckedBoxes);
  };

  const resetActionPoints = () => {
    setActionPoints({
      box1: true,
      box2: true,
      box3: true,
      box4: true,
    });
  };

  return (
    <article className="sheet grid grid-cols-3 p-4">
      <section className="top-block col-span-3 flex w-full justify-between">
        <div className="flex w-full flex-col">
          <div className="stat-box">
            <div>Player Name</div>
            <div>{character.playerName}</div>
          </div>
          <div className="stat-box">
            <div>Character Name</div>
            <div>{character.name}</div>
          </div>
        </div>
        <Image
          src="/assets/DC20-logo.png"
          alt="dc20 logo"
          width="200"
          height="50"
        />
        <div className="flex w-full flex-col">
          <div className="stat-box">
            <div>Class & Subclass</div>
            <div>{character.charClass}</div>
          </div>
          <div className="stat-box">
            <div>Ancestry & Background</div>
            <div>{character.ancestry}</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="stat-box">
            <div>Level</div>
            <div>{character.level}</div>
          </div>
          <div className="stat-box">
            <div>Combat Mastery</div>
            <div>{combatMastery}</div>
          </div>
        </div>
      </section>
      {/* character.sidebar */}
      <section className="stat-box row-span-3 flex flex-col">
        <div className="stat-box">
          <SkillList attribute="prime" character={character} />
        </div>
        <div className="stat-box">
          <SkillList attribute="might" character={character} />
        </div>
        <div className="stat-box">
          <SkillList attribute="agility" character={character} />
        </div>
        <div className="stat-box">
          <SkillList attribute="charisma" character={character} />
        </div>
        <div className="stat-box">
          <SkillList attribute="intelligence" character={character} />
          <div>
            <span>Knowledge</span>
            <SkillList attribute="knowledge" character={character} />
          </div>
        </div>
      </section>
      <section className="stat-box col-span-2 grid grid-cols-5">
        <div className="stat-box flex flex-col justify-between">
          <div className="text-center">
            Stamina Points
            <br />
            <input
              className="number-flipper"
              type="number"
              value={stamina}
              onChange={(e) => setStamina(parseInt(e.target.value))}
              max={maxStamina}
              min="0"
            />
          </div>
          <div className="text-center">
            {maxStamina}
            <br /> Max
          </div>
        </div>
        <div className="stat-box flex flex-col justify-between">
          <div className="text-center">
            Mana Points
            <br />
            <input
              className="number-flipper"
              type="number"
              value={mana}
              onChange={(e) => setMana(parseInt(e.target.value))}
              max={maxMana}
              min="0"
            />
          </div>
          <div className="text-center">
            {maxMana}
            <br />
            Max
          </div>
        </div>
        <div className="stat-box flex flex-col justify-between">
          <div className="text-center">
            Hit Points
            <br />
            <input
              className="number-flipper"
              type="number"
              value={hp}
              onChange={(e) => setHP(parseInt(e.target.value))}
              max={maxHP}
              min={deathThreshold}
            />
          </div>
          <div className="text-center">
            {maxHP}
            <br />
            Max
          </div>
          <div className="text-center">
            <input
              className="number-flipper"
              type="number"
              value={tempHP}
              onChange={(e) => setTempHP(parseInt(e.target.value))}
              max={maxHP}
              min="0"
            />
            <br />
            Temp
          </div>
        </div>
        <div className="stat-box col-span-2 grid grid-cols-2">
          <div className="col-span-2">Defense</div>
          <div>
            <div>Physical:</div>
            <div>{usePhysicalDefense(character)}</div>
            <div>Heavy: {usePhysicalDefense(character) + 5}</div>
            <div>Brutal: {usePhysicalDefense(character) + 10}</div>
            <div>PDR: 0</div>
          </div>
          <div>
            <div>Mystical:</div>
            <div>{useMysticalDefense(character)}</div>
            <div>Heavy: {useMysticalDefense(character) + 5}</div>
            <div>Brutal: {useMysticalDefense(character) + 10}</div>
            <div>PDR: 0</div>
          </div>
        </div>
      </section>
      <section className="stat-box">
        <div>
          <div>
            Action points:
            <button
              onClick={resetActionPoints}
              className="outline-button"
            >
              Reset Actions
            </button>
          </div>
          <label className="my-6 flex justify-between">
            <input
              className="action-box"
              type="checkbox"
              checked={actionPoints.box1}
              onChange={() => handleActionBoxChange("box1")}
            />
            <input
              className="action-box"
              type="checkbox"
              checked={actionPoints.box2}
              onChange={() => handleActionBoxChange("box2")}
            />
            <input
              className="action-box"
              type="checkbox"
              checked={actionPoints.box3}
              onChange={() => handleActionBoxChange("box3")}
            />
            <input
              className="action-box"
              type="checkbox"
              checked={actionPoints.box4}
              onChange={() => handleActionBoxChange("box4")}
            />
            <div></div>
          </label>
        </div>
        <div>
          <div> {combatMastery + character.prime} - Attack / Spell Check</div>
          <div>{10 + combatMastery + character.prime} - Save DC</div>
        </div>
      </section>
      <section className="stat-box row-span-2">
        <div>
          <div>exhaustion: </div>
          <div className="my-6 flex justify-between">
            <input
              className="exhaustion-box"
              type="checkbox"
              checked={exhaustion.box1}
              onChange={() => handleExhaustionBoxChange("box1")}
            />
            <input
              className="exhaustion-box"
              type="checkbox"
              checked={exhaustion.box2}
              onChange={() => handleExhaustionBoxChange("box2")}
            />
            <input
              className="exhaustion-box"
              type="checkbox"
              checked={exhaustion.box3}
              onChange={() => handleExhaustionBoxChange("box3")}
            />
            <input
              className="exhaustion-box"
              type="checkbox"
              checked={exhaustion.box4}
              onChange={() => handleExhaustionBoxChange("box4")}
            />
            <input
              className="exhaustion-box"
              type="checkbox"
              checked={exhaustion.box5}
              onChange={() => handleExhaustionBoxChange("box5")}
            />
            <div className="death-icon"></div>
          </div>
        </div>
        <div>{deathThreshold} - Death Threshold</div>
        <div>
          <div>25ft - Move Speed</div>
        </div>
        <div>
          <div>{5 * character.agility}ft - Jump distance</div>
        </div>
        <section className="stat-box">
          <div>
            <div>Rest Points:</div>
            <input
              className="number-flipper"
              type="number"
              value={restPoints}
              onChange={(e) => setRest(parseInt(e.target.value))}
              max={maxRest}
              min="0"
            />
            / {maxRest}
          </div>
          <div>
            <div>Grit Points:</div>
            <input
              className="number-flipper"
              type="number"
              value={restPoints}
              onChange={(e) => setRest(parseInt(e.target.value))}
              max={maxRest}
              min="0"
            />
            / {maxGrit}
          </div>
        </section>
      </section>
      <section className="stat-box">
        <span>Trades</span>
        <div className="skill-line"></div>
        <div className="skill-line"></div>
        <div className="skill-line"></div>
        <div className="skill-line"></div>
        <span>Languages</span>
        <div className="skill-line"></div>
        <div className="skill-line"></div>
        <div className="skill-line"></div>
        <div className="skill-line"></div>
      </section>
    </article>
  );
}
