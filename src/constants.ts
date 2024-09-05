import { OtherPro } from "./types";

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

export const ANCESTRY_TRAITS = {
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
  ],
};

const ELEMENTAL_BREATH_WEAPON =
  "Make a Spell Check against every target's PD within the area. HIT: The target takes 2 Draconic damage. Before you make your Spell Check, you can spend 1 SP to increase the damage by 1, or 1 MP to increase the damage by 2";

const MYSTIC_BREATH_WEAPON =
  "Make a Spell Check against every target's MD within the area. Hit: The target takes 1 Draconic damage. Before you make your Spell Check, you can spend 1 SP to increase the damage by 1, or 1 MP to increase it by 2";
