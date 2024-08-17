import {
  Attributes,
  CharDB,
  CharDBData,
  Character,
  ClassTypes,
  SKILL_MASTERY_LEVELS,
  SKILL_NAMES,
} from "~/types";

export function CharDBtoCharacter(params: CharDB): Character {
  const stats = params.char_data;
  return {
    name: params.char_name,
    playerName: stats.playerName,
    level: params.char_level,
    ancestry: params.char_ancestry,
    ancestryFeatures: [], // params.ancestryFeatures;
    might: stats.might,
    agility: stats.agility,
    charisma: stats.charisma,
    intelligence: stats.intelligence,
    prime: usePrime(stats),
    attributeSaveMasteries: [], // stats.attributeSaveMasteries;
    skillMasteries: stats.skillMasteries,
    trades: stats.trades,
    languages: stats.languages,
    charClass: params.char_class,
    charClassType: useClassType(params.char_class),
    classAttributes: [], // stats.classAttributes
    flavor: stats.flavor,
    armorBonus: stats.armorBonus,
  };
}

function useClassType(charClass: string): ClassTypes {
  switch (charClass) {
    case "Barbarian":
    case "Commander":
    case "Fighter":
    case "Monk":
    case "Ranger":
    case "Rogue":
      return "Martial";

    case "Bard":
    case "Cleric":
    case "Druid":
    case "Sorcerer":
    case "Warlock":
    case "Wizard":
      return "Spellcaster";

    default:
      return "Hybrid";
  }
}

export function usePrime(stats: CharDBData | Character): number {
  return Math.max(
    ...Object.values([
      stats.might,
      stats.agility,
      stats.charisma,
      stats.intelligence,
    ]),
  );
}

export function useCombatMastery(character: Character): number {
  return Math.ceil(character.level / 2);
}

export function useSaveBonus(
  character: Character,
  attribute: Attributes,
): number {
  const attributeBonus = character[attribute];
  const hasMastery =
    character.attributeSaveMasteries.findIndex(
      (mastery) => mastery === attribute,
    ) > -1;

  return attributeBonus + (hasMastery ? useCombatMastery(character) : 0);
}

export function useSkillBonus(
  character: Character,
  skillName: SKILL_NAMES,
  attribute: Attributes | "knowledge",
): number {
  const skillLevel: number =
    character.skillMasteries?.[attribute]?.[skillName] || 0;

  if (attribute === "knowledge") {
    attribute = "intelligence";
  }

  return character[attribute] + (SKILL_MASTERY_LEVELS?.[skillLevel] || 0);
}

// TODO:
// See if I need this still
//
// export function useTradeBonus(character: Character, tradeName: string): number {
//   const tradeObj = character.trades[tradeName];
//
//   if (tradeObj === undefined) {
//     return 0;
//   }
//
//   const tradeLevel = tradeObj?.tradeLevel || 0;
//
//   return (
//     character[tradeObj.tradeAttribute] +
//     (SKILL_MASTERY_LEVELS[tradeLevel] ? SKILL_MASTERY_LEVELS[tradeLevel] : 0)
//   );
// }

export function useMaxHP(character: Character): number {
  return 6 + character.level + character.might;
}

export function useMaxStamina(character: Character): number {
  if (character.charClassType === "Martial") {
    return 1;
  }
  return 0;
}

export function useMaxMana(character: Character): number {
  if (character.charClassType === "Spellcaster") {
    return 6;
  }
  return 0;
}

export function usePhysicalDefense(character: Character): number {
  return (
    8 + useCombatMastery(character) + character.armorBonus + character.agility
  );
}

export function useMysticalDefense(character: Character): number {
  return (
    8 +
    useCombatMastery(character) +
    character.charisma +
    character.intelligence
  );
}

export function useAttackCheck(character: Character): number {
  return useCombatMastery(character) + usePrime(character);
}

export function useSaveDC(character: Character): number {
  return 8 + useCombatMastery(character) + usePrime(character);
}

export function useMartialCheck(character: Character): number {
  return Math.max(
    useSkillBonus(character, "athletics", "might"),
    useSkillBonus(character, "acrobatics", "agility"),
  );
}
