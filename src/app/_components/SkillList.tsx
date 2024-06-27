import { useSaveBonus } from "~/helpers/calculators";
import { Attributes, Character, SKILL_MASTERY_LEVELS } from "~/types";

type PropTypes = {
  attribute: Attributes | "knowledge";
  character: Character;
};

export default function SkillList({ attribute, character }: PropTypes) {
  const baseAttribute: Attributes = attribute === "knowledge" ? "intelligence" : attribute

  const skillList = Object.entries(character.skillMasteries[attribute]).map(
    ([skillName, skillLevel]) => {

      if (attribute === "knowledge") {
        return (
          <div>
            {skillName}:
            {character.intelligence + (SKILL_MASTERY_LEVELS[skillLevel] || 0)}
          </div>
        );
      }

      return (
        <div>
          {skillName}:
          {character[attribute] + (SKILL_MASTERY_LEVELS[skillLevel] || 0)}
        </div>
      );
    },
  );

  const attributeSave = useSaveBonus(character, baseAttribute);

  return (
    <div>
      <div className="flex justify-between">
        <div>{character[baseAttribute]}</div>
        <div>{attribute}</div>
        <div>Save: {attributeSave}</div>
      </div>
      {skillList}
    </div>
  );
}
