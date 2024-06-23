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
    <article className="sheet">
      <section className="top-block stat-box">
        <div>
          <div>Player Name</div>
          <div>{character.playerName}</div>
        </div>
        <div>
          <div>Name</div>
          <div>{character.name}</div>
        </div>
        <div>
          <div>Class & Subclass</div>
          <div>{character.charClass}</div>
        </div>
        <div>
          <div>Ancestry & Background</div>
          <div>{character.ancestry}</div>
        </div>
        <div>
          <div>Level</div>
          <div>{character.level}</div>
        </div>
        <div>
          <div>Combat Mastery</div>
          <div>{combatMastery}</div>
        </div>
      </section>
      {/* character.sidebar */}
      <section className="stat-box flex flex-col">
        <div>
          <div>Prime:</div>
          <div>{character.prime}</div>
          <div className="skill-line"></div>
        </div>
        <div>
          <div>Might:</div>
          <div>{character.might}</div>
          <div className="skill-line"></div>
          <div className="skill-line"></div>
        </div>
        <div>
          <div>Agility:</div>
          <div>{character.agility}</div>
          <div className="skill-line"></div>
          <div className="skill-line"></div>
          <div className="skill-line"></div>
        </div>
        <div>
          <div>Charisma:</div>
          <div>{character.charisma}</div>
          <div className="skill-line"></div>
          <div className="skill-line"></div>
          <div className="skill-line"></div>
        </div>
        <div>
          <div>Intelligence:</div>
          <div>{character.intelligence}</div>
          <div className="skill-line"></div>
          <div className="skill-line"></div>
          <div className="skill-line"></div>
          <div>
            <span>Knowledge</span>
            <div className="skill-line"></div>
            <div className="skill-line"></div>
            <div className="skill-line"></div>
            <div className="skill-line"></div>
            <div className="skill-line"></div>
            <div className="skill-line"></div>
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
      <section className="stat-box flex">
        <div>
          <div>Stamina:</div>
          <div>{stamina}</div>
          <div>Max: {useMaxStamina(character)}</div>
        </div>
        <div>
          <div>Mana:</div>
          <div>{mana}</div>
          <div>Max: {useMaxMana(character)}</div>
        </div>
        <div>
          <div>Hit Points:</div>
          <div>{hp}</div>
          <div>Max: {useMaxHP(character)}</div>
          <div>Temp: {0}</div>
        </div>
        <div>
          <div>Defense</div>
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
          {restPoints} / {character.level + character.might}
        </div>
        <div>
          {gritPoints} / {2 + character.charisma}
        </div>
      </section>
    </article>
  );
}
