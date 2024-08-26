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

  setBackground(payload: any) {
    console.log({ payload });
  }

  setAncestry(payload: any) {
    console.log({ payload });
  }

  setClass(payload: any) {
    console.log({ payload });
  }

  setEquipment(payload: any) {
    console.log({ payload });
  }
}

type FormAttribute = {
  mod: number;
  save: boolean;
};

type SkillLevelList = {
  prime: {
    awareness: number;
  };
  might: {
    athletics: number;
  };
  agility: {
    acrobatics: number;
    trickery: number;
    stealth: number;
  };
  charisma: {
    animal: number;
    influence: number;
    insight: number;
  };
  intelligence: {
    investigation: number;
    medicine: number;
    survival: number;
  };
  knowledge: {
    arcana: number;
    history: number;
    nature: number;
    occultism: number;
    religion: number;
  };
};

type OtherPro = {
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
