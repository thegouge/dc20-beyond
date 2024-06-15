export function derivePrime(character: Character): number {
  return Math.max(...Object.values(character.attributes));
}

export function deriveCombatMastery(character: Character): number {
  return Math.ceil(character.level / 2);
}

export function deriveSaveBonus(
  character: Character,
  attribute: string,
): number {
  return character.attributes[attribute] +
    character.attributeSaveMasteries.findIndex(
      (mastery) => mastery === attribute,
    ) >
    -1
    ? deriveCombatMastery(character)
    : 0;
}
