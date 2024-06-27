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

export default function heet({ character }: PropTypes) {
  const [hp] = useState(useMaxHP(character));
  const [stamina] = useState(useMaxStamina(character));
  const [mana] = useState(useMaxMana(character));
  const [actionPoints] = useState(4);
  const [combatMastery] = useState(useCombatMastery(character));
  const [exhaustionPoints] = useState(0);
  const [restPoints] = useState(character.level + character.might);
  const [gritPoints] = useState(2 + character.charisma);

  return (
    <article className="sheet grid grid-cols-3">
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
      <section className="stat-box flex">
        <div className="stat-box">
          <div>Prime:</div>
          <div>{character.prime}</div>
          <SkillList attribute="prime" />
        </div>
        <div className="stat-box">
          <div>Might:</div>
          <div>{character.might}</div>
          <SkillList attribute="might" />
        </div>
        <div className="stat-box">
          <div>Agility:</div>
          <div>{character.agility}</div>
          <SkillList attribute="agility" />
        </div>
        <div className="stat-box">
          <div>Charisma:</div>
          <div>{character.charisma}</div>
          <SkillList attribute="charisma" />
        </div>
        <div className="stat-box">
          <div>Intelligence:</div>
          <div>{character.intelligence}</div>
          <SkillList attribute="intelligence" />
          <div>
            <span>Knowledge</span>
            <SkillList attribute="knowledge" />
          </div>
        </div>
      </section>
      <section className="stat-box col-span-2 grid grid-cols-5">
        <div className="stat-box flex flex-col justify-between">
          <div className="text-center">
            Stamina Points
            <br /> {stamina}
          </div>
          <div className="text-center">
            {useMaxStamina(character)}
            <br /> Max
          </div>
        </div>
        <div className="stat-box flex flex-col justify-between">
          <div className="text-center">
            Mana Points
            <br />
            {mana}
          </div>
          <div className="text-center">
            {useMaxMana(character)}
            <br />
            Max
          </div>
        </div>
        <div className="stat-box flex flex-col justify-between">
          <div className="text-center">
            Hit Points
            <br />
            {hp}
          </div>
          <div className="text-center">
            {useMaxHP(character)}
            <br />
            Max
          </div>
          <div className="text-center">
            {0}
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
        <span>Trades</span>
        <div className="skill-line"></div>
        <div className="skill-line"></div>
        <div className="skill-line"></div>
        <div className="skill-line"></div>
      </section>
      <section className="stat-box">
        <span>Languages</span>
        <div className="skill-line"></div>
        <div className="skill-line"></div>
        <div className="skill-line"></div>
        <div className="skill-line"></div>
      </section>
      <section className="stat-box">
        <div>
          <div>Action points:</div>
          <div>{actionPoints}</div>
        </div>
        <div>
          <div> {combatMastery + character.prime}</div> Attack / Spell Check
          <div>{10 + combatMastery + character.prime} Save DC</div>
        </div>
      </section>
      <section className="stat-box">
        <div>
          <div>exhaustion: </div>
          <div>{exhaustionPoints}</div>
        </div>
        <div>{character.prime * -1}: Death Threshold</div>
        <div>
          <div>25ft</div>
          <div>Move Speed</div>
        </div>
        <div>
          <div>{5 * character.agility}ft</div>
          <div>Jump distance</div>
        </div>
      </section>
      <section className="stat-box">
        <div>
          <div>Rest Points:</div>
          {restPoints} / {character.level + character.might}
        </div>
        <div>
          <div>Grit Points:</div>
          {gritPoints} / {2 + character.charisma}
        </div>
      </section>
    </article>
  );
}
