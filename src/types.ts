import { ALL_TRADES } from "./constants";

export class Character {
  constructor() {
    this.name = "";
    this.playerName = "";
    this.level = 1;
    this.ancestry = "";
    this.ancestryFeatures = [];
    this.prime = 0;
    this.might = 0;
    this.agility = 0;
    this.charisma = 0;
    this.intelligence = 0;
    this.attributeSaveMasteries = [];
    this.skillMasteries = {
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
    };
    this.trades = [];
    this.languages = [];
    this.charClass = "";
    this.charClassType = "Martial";
    this.classAttributes = [];
    this.armorBonus = 0;
    this.flavor = "";
  }
  // Foundational aspecs a player chooses
  name: string;
  playerName: string;
  level: number;
  ancestry: string;
  ancestryFeatures: string[];
  prime: number;
  might: number;
  agility: number;
  charisma: number;
  intelligence: number;
  attributeSaveMasteries: string[];
  skillMasteries: SkillLevelList;
  trades: OtherPro[];
  languages: OtherPro[];
  charClass: string;
  charClassType: ClassTypes;
  classAttributes: {
    attributeName: string;
    attributeDesc: string;
  }[];
  armorBonus: number;
  flavor: string;

  // A list of things I'd want to save between sessions
  // hp: PlayerCounter;
  // mp: PlayerCounter;
  // sp: PlayerCounter;
  // ap: PlayerCounter;
  //
  // actions: {
  //   name: string;
  //   description: string;
  // }[];

  loadSavedCharacter(payload: CharacterValues) {
    this.name = payload.name
    this.playerName = payload.playerName
    this.level = payload.level
    this.ancestry = payload.ancestry
    this.ancestryFeatures = payload.ancestryFeatures
    this.prime = payload.prime
    this.might = payload.might
    this.agility = payload.agility
    this.charisma = payload.charisma
    this.intelligence = payload.intelligence
    this.attributeSaveMasteries = payload.attributeSaveMasteries
    this.skillMasteries = payload.skillMasteries
    this.trades = payload.trades
    this.languages = payload.languages
    this.charClass = payload.charClass
    this.charClassType = payload.charClassType
    this.classAttributes = payload.classAttributes
    this.armorBonus = payload.armorBonus
    this.flavor = payload.flavor
  }

  setMetaData(payload: { playerName: string; characterName: string }) {
    this.name = payload.characterName;
    this.playerName = payload.playerName;
  }

  setAttributes(payload: {
    bonuses: Attributes[];
    might: FormAttribute;
    agility: FormAttribute;
    charisma: FormAttribute;
    intelligence: FormAttribute;
    prime: FormAttribute;
  }) {
    const bonusArray = payload.bonuses;
    for (let i = 0; i < bonusArray.length; i++) {
      payload[bonusArray[i] as Attributes].mod++;
    }

    this.might = payload.might.mod;
    if (payload.might.save) {
      this.attributeSaveMasteries.push("might");
    }

    this.agility = payload.agility.mod;
    if (payload.agility.save) {
      this.attributeSaveMasteries.push("agility");
    }

    this.charisma = payload.charisma.mod;
    if (payload.charisma.save) {
      this.attributeSaveMasteries.push("charisma");
    }

    this.intelligence = payload.intelligence.mod;
    if (payload.intelligence.save) {
      this.attributeSaveMasteries.push("intelligence");
    }

    this.prime = 3;
  }

  setTrades(trades: string[]) {
    this.trades = trades.map((tradeName) => {
      const attribute = ALL_TRADES.find(
        (tradeObj) => (tradeObj.name = tradeName),
      )?.attribute as Attributes;
      return {
        name: tradeName,
        attribute,
        level: 1,
      };
    });
  }

  setLanguages(langs: OtherPro[]) {
    this.languages = langs.filter((langObj) => langObj.level > 0);
  }

  setSingleAncestry(payload: any) {
    console.log({ payload });
  }

  setClass(payload: any) {
    console.log({ payload });
  }

  setEquipment(payload: any) {
    console.log({ payload });
  }
}

type CharacterValues = {
  name: string;
  playerName: string;
  level: number;
  ancestry: string;
  ancestryFeatures: string[];
  prime: number;
  might: number;
  agility: number;
  charisma: number;
  intelligence: number;
  attributeSaveMasteries: string[];
  skillMasteries: SkillLevelList;
  trades: OtherPro[];
  languages: OtherPro[];
  charClass: string;
  charClassType: ClassTypes;
  classAttributes: {
    attributeName: string;
    attributeDesc: string;
  }[];
  armorBonus: number;
  flavor: string;

  // A list of things I'd want to save between sessions
  // hp: PlayerCounter;
  // mp: PlayerCounter;
  // sp: PlayerCounter;
  // ap: PlayerCounter;
};

type FormAttribute = {
  mod: number;
  save: boolean;
};

export type SkillLevelList = {
  prime: SkillLevels;
  might: SkillLevels;
  agility: SkillLevels;
  charisma: SkillLevels;
  intelligence: SkillLevels;
  knowledge: SkillLevels;
};

export type SkillLevels = {
  [index: string]: number;
};

export type OtherPro = {
  name: string;
  attribute: Attributes | "language";
  level: number;
};

export type CharDB = {
  id: number;
  char_name: string;
  createdAt: any;
  updatedAt: any;
  char_class: string;
  char_ancestry: string;
  char_level: number;
  char_data: CharDBData;
};

export type CharDBData = {
  playerName: string;
  might: number;
  agility: number;
  charisma: number;
  intelligence: number;
  classType: string;
  stamina: number;
  mana: number;
  hp: number;
  armorBonus: number;
  skillMasteries: SkillLevelList;
  trades: OtherPro[];
  languages: OtherPro[];
  flavor: string;
};

export type Attributes =
  | "might"
  | "agility"
  | "intelligence"
  | "charisma"
  | "prime";
export type ClassTypes = "Martial" | "Spellcaster" | "Hybrid";

export type Skill = {
  name: string;
  attribute: Attributes;
};

