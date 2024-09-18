import {
  Ancestry,
  AncestryTrait,
  ClassAttributes,
  OtherPro,
  PlayerClasses,
  Maneuver
} from "./types";

export const DEFAULT_CHAR_DATA = {
  playerName: "you",
  might: 0,
  agility: 0,
  charisma: 0,
  intelligence: 0,
  classType: "Martial",
  stamina: 1,
  mana: 0,
  hp: 7,
  armorBonus: 1,
  flavor: "",
  skillMasteries: {
    prime: {
      awareness: 0,
    },
    might: {
      athletics: 0,
    },
    agility: {
      acrobatics: 0,
      trickery: 0,
      stealth: 0,
    },
    charisma: {
      animal: 0,
      influence: 0,
      insight: 0,
    },
    intelligence: {
      investigation: 0,
      medicine: 0,
      survival: 0,
    },
    knowledge: {
      arcana: 0,
      history: 0,
      nature: 0,
      occultism: 0,
      religion: 0,
    },
  },
  trades: [],
  languages: [],
};

export const DEFAULT_DB_CHAR = {
  id: 0,
  char_name: "",
  createdAt: Date.now(),
  updatedAt: Date.now(),
  char_class: "Fighter",
  char_ancestry: "Human",
  char_level: 1,
  char_data: DEFAULT_CHAR_DATA,
};

export const SKILL_MASTERY_LEVELS = [0, 2, 4, 6, 8, 10] as const;

export type SKILL_NAMES =
  | "awareness"
  | "athletics"
  | "acrobatics"
  | "trickery"
  | "stealth"
  | "animal"
  | "influence"
  | "insight"
  | "investigation"
  | "medicine"
  | "survival"
  | "arcana"
  | "history"
  | "nature"
  | "occultism"
  | "religion";

export const ALL_TRADES: OtherPro[] = [
  { name: "Alchemy", attribute: "intelligence", level: 0 },
  { name: "Blacksmithing", attribute: "might", level: 0 },
  { name: "Brewing", attribute: "intelligence", level: 0 },
  { name: "Carpentry", attribute: "might", level: 0 },
  { name: "Cartography", attribute: "intelligence", level: 0 },
  { name: "Cooking", attribute: "agility", level: 0 },
  { name: "Cryptography", attribute: "intelligence", level: 0 },
  { name: "Disguise", attribute: "charisma", level: 0 },
  { name: "Gaming", attribute: "charisma", level: 0 },
  { name: "Glassblowing", attribute: "agility", level: 0 },
  { name: "Herbalism", attribute: "intelligence", level: 0 },
  { name: "Illustration", attribute: "agility", level: 0 },
  { name: "Jeweler", attribute: "agility", level: 0 },
  { name: "Leatherworking", attribute: "agility", level: 0 },
  { name: "Lockpicking", attribute: "agility", level: 0 },
  { name: "Masonry", attribute: "might", level: 0 },
  { name: "Musician", attribute: "charisma", level: 0 },
  { name: "Sculpting", attribute: "agility", level: 0 },
  { name: "Theatre", attribute: "charisma", level: 0 },
  { name: "Tinkering", attribute: "intelligence", level: 0 },
  { name: "Weaving", attribute: "agility", level: 0 },
  { name: "Vehicles", attribute: "agility", level: 0 },
];

export const ALL_LANGS: OtherPro[] = [
  { name: "common", attribute: "language", level: 2 },
  { name: "human", attribute: "language", level: 0 },
  { name: "dwarvish", attribute: "language", level: 0 },
  { name: "elvish", attribute: "language", level: 0 },
  { name: "gnomish", attribute: "language", level: 0 },
  { name: "halfling", attribute: "language", level: 0 },
  { name: "giant", attribute: "language", level: 0 },
  { name: "draconic", attribute: "language", level: 0 },
  { name: "orcish", attribute: "language", level: 0 },
  { name: "fey", attribute: "language", level: 0 },
  { name: "elemental", attribute: "language", level: 0 },
  { name: "celestial", attribute: "language", level: 0 },
  { name: "fiendish", attribute: "language", level: 0 },
  { name: "deep speech", attribute: "language", level: 0 },
];

export const ANCESTRY_TRAITS: { [name in Ancestry]: AncestryTrait[] } = {
  human: [
    {
      name: "Attribute Increase",
      description:
        "Choose an Attribute. The chosen Attribute increases by 1 (up to the Attribute Limit)",
      cost: 2,
      requiresCalc: true,
    },
    {
      name: "Resilience",
      description:
        "Choose an Atrribute. The chosen Attribute gains Save Mastery.",
      cost: 2,
      requiresCalc: true,
    },
    {
      name: "Human Resolve",
      description: "Your Death's Door Threshold value is expanded by 1",
      cost: 1,
      requiresCalc: true,
    },
    {
      name: "Undying",
      description: "You have ADV on Saves against the 'Doomed' Condition",
      cost: 0,
      requiresCalc: false,
    },
  ],
  elf: [
    {
      name: "Elven Will",
      description:
        "You have ADV on Checks and Saves against being Charmed and put to Sleep",
      cost: 1,
      requiresCalc: false,
    },
    {
      name: "Nimble",
      description:
        "When you take the Dodge Action, you instead gain the benefits of the Full Dodge Action",
      cost: 2,
      requiresCalc: false,
    },
    {
      name: "Agile Explorer",
      description: "You are not affected by Difficult Terrain",
      cost: 2,
      requiresCalc: false,
    },
    {
      name: "Discerning Sight",
      description:
        "You have ADV on Checks and Saves made to discern through visual illusions",
      cost: 0,
      requiresCalc: false,
    },
  ],
  dwarf: [
    {
      name: "Tough",
      description: "Your HP maximum increases by 1",
      cost: 1,
      requiresCalc: true,
    },
    {
      name: "Toxic Fortitude",
      description:
        "You have Poison Resistance (Half) and ADV on Saves against being Poisoned",
      cost: 2,
      requiresCalc: false,
    },
    {
      name: "Physically Sturdy",
      description:
        "You have ADV on Saves against being Impaired, Deafened or Petrified",
      cost: 2,
      requiresCalc: false,
    },
    {
      name: "Iron Stomach",
      description:
        "You have ADV on Saves against effects that come from consuming food or liquids",
      cost: 0,
      requiresCalc: false,
    },
  ],
  halfling: [
    {
      name: "Small-Sized",
      description: "Your Size is considered Small.",
      cost: -1,
      requiresCalc: false,
    },
    {
      name: "Elusive",
      description:
        "When you take the Disengage Action, you instead gain the benefits of the Full Disengage Action",
      cost: 2,
      requiresCalc: false,
    },
    {
      name: "Halfling Bravery",
      description:
        "You have ADV on Saves against being Intimidated, Rattled, or Frightened",
      cost: 2,
      requiresCalc: false,
    },
    {
      name: "Halfling Endurance",
      description: "You have ADV on Saves made to resist gaining Exhaustion",
      cost: 1,
      requiresCalc: false,
    },
    {
      name: "Deft Footwork",
      description:
        "You can move through the space of a hostile creature 1 size larger than you as if it were Difficult Terrain",
      cost: 1,
      requiresCalc: false,
    },
    {
      name: "Beast Whisperer",
      description:
        "You can speak to Beasts in a limited manner. They can understand the meanings of simple words, concepts, or states of emotion. You have no special ability to understand them in return",
      cost: 0,
      requiresCalc: false,
    },
  ],
  gnome: [
    {
      name: "Small-Sized",
      description: "Your Size is condsidered Small",
      cost: -1,
      requiresCalc: false,
    },
    {
      name: "Escape Artist",
      description:
        "You have ADV on Checks and Saves to avoid or escape being Grappled or Restrained",
      cost: 2,
      requiresCalc: false,
    },
    {
      name: "Magnified Vision",
      description:
        "You have ADV on Investigation Checks made to inspect something you're holding or touching",
      cost: 1,
      requiresCalc: false,
    },
    {
      name: "Mental Clarity",
      description: "You have ADV on Saves against being Dazed or Stunned",
      cost: 2,
      requiresCalc: false,
    },
    {
      name: "Strong-Minded",
      description: "Your MD increases by 1",
      cost: 1,
      requiresCalc: true,
    },
    {
      name: "Predict Weather",
      description:
        "You can naturally tell what the weather is going to be in the next hour in the area within 1 mile of you. You don't have DisADV on Checks or Saves as a result of naturally occuring weather",
      cost: 0,
      requiresCalc: false,
    },
  ],
  orc: [
    {
      name: "Cursed Mind",
      description: "Your MD decreases by 1",
      cost: -1,
      requiresCalc: true,
    },
    {
      name: "Orc Rush",
      description:
        "Once per Combat, when you willingly move toward an enemy, you can spend 1 AP to gain Temp HP equal to your Prime Modifier",
      cost: 2,
      requiresCalc: false,
    },
    {
      name: "Brutal Strikes",
      description:
        "You deal +1 damage when you score a Brutal or Critical Hit with a Melee Weapon or Unarmed Strike",
      cost: 2,
      requiresCalc: false,
    },
    {
      name: "Tough",
      description: "Your HP maximum increases by 1",
      cost: 1,
      requiresCalc: true,
    },
    {
      name: "Orcish Resolve",
      description:
        "You can now spend up to 2 AP while on Death's Door instead of 1",
      cost: 1,
      requiresCalc: false,
    },
    {
      name: "Already Cursed",
      description: "You have ADV on Saves against Curses",
      cost: 0,
      requiresCalc: false,
    },
  ],
  dragonborn: [
    {
      name: "Darkvision",
      description: "You have Darkvision 10 Spaces",
      cost: 1,
      requiresCalc: false,
    },
    {
      name: "Draconic Resistance",
      description:
        "You gain Resistance (Half) to your Draconic damage type (DAMAGE)",
      cost: 2,
      requiresCalc: false,
    },
    {
      name: "Draconic Breath Weapon",
      description:
        "You gain a Breath Weapon based on your Draconic Origin. You can Spend 2AP to exhale in a 3 Space Cone or a 6 Space Line. Alternatively, you can choose to make an Attack against a single target within 6 Spaces, increasing the damage by 1. You can use this ability once between Long Rests. When you Roll for Initiative, or meet some other unique criteria at the GM's discretion, this ability recharges",
      cost: 2,
      requiresCalc: true,
    },
    {
      name: "Reptilian Superiority",
      description:
        "You have ADV on Intimidation Checks against reptilian creature of Medium or smaller (not including other Dragonborn)",
      cost: 0,
      requiresCalc: false,
    },
  ],
  giantborn: [
    {
      name: "Tough",
      description: "Your HP maximum increases by 1",
      cost: 1,
      requiresCalc: true,
    },
    {
      name: "Powerful Build",
      description:
        "You increase by 1 size, but you occupy the Space of a creature 1 size smaller",
      cost: 2,
      requiresCalc: false,
    },
    {
      name: "Unstoppable",
      description: "You have ADV on Saves against being Slowed or Stunned",
      cost: 1,
      requiresCalc: false,
    },
    {
      name: "Giant's Resolve",
      description: "While on Death's Door, you reduce all damage taken by 1",
      cost: 1,
      requiresCalc: false,
    },
    {
      name: "Unyielding Movement",
      description: "You are immune to being Slowed 2 (or higher)",
      cost: 0,
      requiresCalc: false,
    },
  ],
  angelborn: [
    {
      name: "Radiant Resistance",
      description: "You have Resistance (Half) to Radiant damage",
      cost: 1,
      requiresCalc: false,
    },
    {
      name: "Celestial Magic",
      description:
        "You learn 1 Spell of your choice from the Divine Spell List. Once per Long Rest, you can cast the chosen Spell spending 1 less MP than normal (minimum 0). The Spell's total MP cost (before all reductions) still can't exceed your Mana spend Limit",
      cost: 2,
      requiresCalc: true,
    },
    {
      name: "Healing Touch",
      description:
        "Once per Combat, you can spend 1 AP to touch a creature and heal it. Make a DC 10 Spell Check. Success: Yolu can restore up to 2 HP. Success (each 5): +1 HP. Failure: You only restore 1 HP",
      cost: 2,
      requiresCalc: false,
    },
    {
      name: "Divine Glow",
      description:
        "Your body can emit Bright Light in a 5 space radius around you at will",
      cost: 0,
      requiresCalc: false,
    },
  ],
  fiendborn: [
    {
      name: "Fiendish Resistance",
      description:
        "You gain Resistance (Half) to your Fiendish damage type (DAMAGE)",
      cost: 2,
      requiresCalc: false,
    },
    {
      name: "Fiendish Magic",
      description:
        "You learn 1 Spell of your choice from the Arcane Spell List from the Destruction or Enchantment Soell Schools. If the Spell deals damage, then it must be the same damage type as your Fiendish damage (DAMAGE). Once per Long Rest, you can cast the chosen Spell spending 1 less MP than normal (minimum 0). The Spell's total MP cost (before all reductions) still can't exceed your Mana Spend Limit.",
      cost: 2,
      requiresCalc: true,
    },
    {
      name: "Darkvision",
      description: "You have Darkvision 10 Spaces.",
      cost: 1,
      requiresCalc: false,
    },
    {
      name: "Light's Bane",
      description:
        "You can spend 1 AP to snuff out a mundane light source within 5 Spaces of you",
      cost: 0,
      requiresCalc: false,
    },
  ],
  beastborn: [
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },:
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
    // { name: "", description: "", cost: 0, requiresCalc: false },
  ],
};

const ELEMENTAL_BREATH_WEAPON =
  "Make a Spell Check against every target's PD within the area. HIT: The target takes 2 Draconic damage. Before you make your Spell Check, you can spend 1 SP to increase the damage by 1, or 1 MP to increase the damage by 2";

const MYSTIC_BREATH_WEAPON =
  "Make a Spell Check against every target's MD within the area. Hit: The target takes 1 Draconic damage. Before you make your Spell Check, you can spend 1 SP to increase the damage by 1, or 1 MP to increase it by 2";

const ALL_ATTACK_MANEUVERS: Maneuver[] = [
  { name: "", description: "" }
]

const EMPTY_MANEUVER: Maneuver = {
  name: "",
  description: ""
}

export const CLASSES: { [key in PlayerClasses]: ClassAttributes } = {
  barbarian: {
    name: "barbarian",
    type: "martial",
    description:
      "Barbarians charge into battle with reckless abandon, ignoring their own safety as they brush off damage and deal even more in return. They trade defense for more offense and let out blood-crazed battle cries.",
    sourceOfPower:
      "Barbarians become overtaken by a surge of strength called Rage. This can manifest as rage, possession, primal power, or something else entirely. A protective Barbarian could tap into their power if their friends are in danger. A frightened Barbarian could lash out when they’re scared. There are many possibilities for where a Barbarian’s power of Rage comes from",
    equipment: [
      "2 Weapons or Shields",
      "1 Ranged Weapon with 20 Ammo or 3 weapons with the toss or thrown property",
      "1 set of novice light armor or novice heavy armor",
    ],
    combatMasteries: [
      "Weapons",
      "all Armors",
      "all Shields",
      "Weapon Style Passives",
    ],
    stamina: 1,
    mana: 0,
    maneuvers: [...ALL_ATTACK_MANEUVERS, EMPTY_MANEUVER, EMPTY_MANEUVER, EMPTY_MANEUVER, EMPTY_MANEUVER],
    spells: [],
    features: [
      {
        name: "Rage",
        description: `During Combat, you can spend 1 AP and 1 SP to enter a Rage for 1 minute. For the duration, you're subjected to the following effects:
  - You deal +1 damage on Melee attacks.
  - You have ADV on Might Checks and Saves.
  - Your PD decreases by 5
  - You gain Resistance (Half) to Elemental and Physical damage.
your rage ends early if you fall unconscious, die, or you choose to end it for 0 AP`,
      },
      {
        name: "Berserker",
        description: `Your primal savagery grants you the following benefits:
  - Charge: When you make a Melee Martial Attack on your turn, you can move up to 2 Spaces immediately before making the Attack.
  - Berserker Defense: You gain access to the folowing PD formula while not wearing Armor: 8 + Combat Mastery + (Agility or Might) + 2
  - Fast Movement: You gain +1 Speed while not wearing armor.
  - Mighty Leap: You can use your Might instead of Agility to determine your Jump Distance and the damage you take from Falling`,
      },
      {
        name: "Shattering Force",
        description: `When you hit a structure or mundane object with a Melee Attack, it’s considered a Critical Hit.`,
      },
    ],
  },
  bard: {
    name: "bard",
    type: "spellcaster",
    description: `Bards utilize artistic expression through various forms to connect with the emotions and heart of magic. This includes a wide range of mediums such as, musical instruments, singing, dancing, drawing, painting, sculpting, poetry, storytelling, inspirational speech, and more. They are great at bringing the best out in those around them through both helping and performing, showcasing high proficiency across multiple disciplines. Bards are remarkably flexible and adaptable spellcasters, capable of tapping into a wide array of magical abilities with the appropriate artistic expression.

Bard Flavor: Bards compile a repertoire of artistic expressions that they manifest as Spells. Musician Bards utilize specific songs or instruments to cast Spells, while dancer Bards perform particular dance moves that represent different Spells. Storyteller Bards initiate combat by narrating tales of wonder and adventure, seamlessly weaving Spells into key points of the story. Painter Bards fluidly and freely paint images, each triggering a specific Spell.`,
    sourceOfPower: `Bards derive their power from harnessing their emotions and force of will, as well as those of others around them. The feeling you get when listening to a stirring song, hearing masterfully read poetry, or witnessing a captivating performance that gives you chills, elevates your heart rate, and provokes you to dance, that passion is what fuels their potential. A Bard's emotion, determination, and will power flows through their unique artistic expression, touching the hearts and minds of those around them and bringing their magic to life.`,
    equipment: [
      "2 Light Weapons",
      "1 Musical Instrument, Theater Kit or Art Kit",
      "1 set of Novice Light Armor",
    ],
    combatMasteries: [
      "Light Weapons",
      "Light Armor",
      "Light Shields",
      "Spellcasting",
    ],
    stamina: 0,
    mana: 3,
    maneuvers: [],
    spells: [
      {
        level: 0,
        name: "",
        description: "",
      },
      {
        level: 0,
        name: "",
        description: "",
      },
      {
        level: 1,
        name: "",
        description: "",
      },
      {
        level: 1,
        name: "",
        description: "",
      },
      {
        level: 1,
        name: "",
        description: "",
      },
    ],
    features: [
      {
        name: "Bardic Performance",
        description: `You can spend 1 AP and 1 MP to start a performance that grants you a 10 Space Aura for 1 minute. Choose 1 of the performances below. While creatures of your choice are within your Aura (and can see or hear you) they benefit from your performance. A creature can only benefit from one instance of each performance at a time.
• Battle Ballad: The chosen creatures deal +1 damage against 1 target of their choice on an Attack they make once on each of their turns.
• Fast Tempo: The chosen creatures gain +1 Speed.
• Inspiring: The chosen creatures gain 1 Temp HP at the start of each of their turns.
• Emotional: Choose 1 of the following Conditions: Charmed, Frightened (includes Rattled & Intimidated), or Taunted. The chosen creatures have ADV on Saves to resist and end the chosen Condition. If a target is affected by the chosen Condition at the start of its turn, it can immediately attempt to end the Condition on itself by repeating its Save.
Changing Performances: Once on each of your turns, you can spend 1 AP to change your performance to a different one. 
Ending Early: The performance ends early if you become Incapacitated, you die, or choose to end it for free.`,
      },
      {
        name: "Font of Inspiration",
        description: `You are an ever present source of aid for your allies. You gain the following benefits:
- Ranged Help Attack: The range of your Help Action when aiding an Attack increases to 10 Spaces.
- Help Reaction: When a creature that you can see makes a Check, you can take the Help Action as a Reaction to aid them with their Check, provided you’re within range to do so`,
      },
      {
        name: "Remarkable Repetoire",
        description: `You learn any 2 Spells of your choice from any Spell List,
provided 1 of them is a Cantrip. You learn to express your art in a unique manner, granting you the ability to alter how you cast Spells. Choose the manner of your expression: Visual or Auditory.
• Visual: Through acrobatics, dancing, juggling, painting, drawing, or miming, you can ignore the Verbal Components of a Spell you cast, but you must provide a Somatic Component instead.
• Auditory: Through singing, playing music, poetry, comedy, or storytelling, you can ignore the Somatic Components of a Spell you cast, but you must provide a Verbal Component instead.`,
      },
      {
        name: "Crowd Pleaser",
        description: `When you spend at least 5 minutes performing an Artistry Trade for one or more people who are actively watching or listening to your performance, you can make an Artistry Trade Check Contested by the targets’ Charisma Save. Success: You gain ADV on Charisma Checks against thetarget for 1 hour or until you become hostile. Creatures have ADV on the Save if they’re considered hostile towards you.`,
      },
    ],
  },
  cleric: {
    name: "cleric",
    type: "spellcaster",
    description: ``,
    sourceOfPower: ``,
    equipment: [],
    combatMasteries: [],
    stamina: 0,
    mana: 0,
    maneuvers: [],
    spells: [],
    features: [{ name: "", description: "" }],
  },
  commander: {
    name: "commander",
    type: "martial",
    description: ``,
    sourceOfPower: ``,
    equipment: [],
    combatMasteries: [],
    stamina: 0,
    mana: 0,
    maneuvers: [],
    spells: [],
    features: [{ name: "", description: "" }],
  },
  druid: {
    name: "druid",
    type: "spellcaster",
    description: ``,
    sourceOfPower: ``,
    equipment: [],
    combatMasteries: [],
    stamina: 0,
    mana: 0,
    maneuvers: [],
    spells: [],
    features: [{ name: "", description: "" }],
  },
  fighter: {
    name: "fighter",
    type: "martial",
    description: ``,
    sourceOfPower: ``,
    equipment: [],
    combatMasteries: [],
    stamina: 0,
    mana: 0,
    maneuvers: [],
    spells: [],
    features: [{ name: "", description: "" }],
  },
  monk: {
    name: "monk",
    type: "martial",
    description: ``,
    sourceOfPower: ``,
    equipment: [],
    combatMasteries: [],
    stamina: 0,
    mana: 0,
    maneuvers: [],
    spells: [],
    features: [{ name: "", description: "" }],
  },
  ranger: {
    name: "ranger",
    type: "martial",
    description: ``,
    sourceOfPower: ``,
    equipment: [],
    combatMasteries: [],
    stamina: 0,
    mana: 0,
    maneuvers: [],
    spells: [],
    features: [{ name: "", description: "" }],
  },
  rogue: {
    name: "rogue",
    type: "martial",
    description: ``,
    sourceOfPower: ``,
    equipment: [],
    combatMasteries: [],
    stamina: 0,
    mana: 0,
    maneuvers: [],
    spells: [],
    features: [{ name: "", description: "" }],
  },
  sorcerer: {
    name: "sorcerer",
    type: "spellcaster",
    description: ``,
    sourceOfPower: ``,
    equipment: [],
    combatMasteries: [],
    stamina: 0,
    mana: 0,
    maneuvers: [],
    spells: [],
    features: [{ name: "", description: "" }],
  },
  spellblade: {
    name: "spellblade",
    type: "hybrid",
    description: ``,
    sourceOfPower: ``,
    equipment: [],
    combatMasteries: [],
    stamina: 0,
    mana: 0,
    maneuvers: [],
    spells: [],
    features: [{ name: "", description: "" }],
  },
  warlock: {
    name: "warlock",
    type: "spellcaster",
    description: ``,
    sourceOfPower: ``,
    equipment: [],
    combatMasteries: [],
    stamina: 0,
    mana: 0,
    maneuvers: [],
    spells: [],
    features: [{ name: "", description: "" }],
  },
  wizard: {
    name: "wizard",
    type: "spellcaster",
    description: ``,
    sourceOfPower: ``,
    equipment: [],
    combatMasteries: [],
    stamina: 0,
    mana: 0,
    maneuvers: [],
    spells: [],
    features: [{ name: "", description: "" }],
  },
};


