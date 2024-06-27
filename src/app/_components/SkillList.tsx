import { Attributes, SKILLS } from "~/types";

type PropTypes = {
  attribute: Attributes | "knowledge";
};

export default function SkillList({ attribute }: PropTypes) {
  const skillList = SKILLS[attribute];

  return (
    <div>
      {skillList.map((skillName) => (
        <div>{skillName}</div>
      ))}
    </div>
  );
}

