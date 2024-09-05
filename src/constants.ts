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
