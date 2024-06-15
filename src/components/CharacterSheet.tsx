import { Character } from "~/types"

type PropTypes = {
  character: Character
}

export default function CharacterSheet({ character }: PropTypes) {
  console.log({ character })
  return (
    <section>
      <div className="w-10 h-10 bg-red-600"></div>
    </section>
  )
}
