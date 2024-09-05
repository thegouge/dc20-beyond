import { AncestryTrait } from "~/types";

type PropType = {
  trait: AncestryTrait;
};

export default function AncestryTraitPicker({ trait }: PropType) {
  return <div>{JSON.stringify(trait)}</div>;
}
