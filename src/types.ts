export type Character = {
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
	"awareness" |
	"athletics" |
	"acrobatics" |
	"trickery" |
	"stealth" |
	"animal" |
	"influence" |
	"insight" |
	"investigation" |
	"medicine" |
	"survival" |
	"arcana" |
	"history" |
	"nature" |
	"occultism" |
	"religion";
