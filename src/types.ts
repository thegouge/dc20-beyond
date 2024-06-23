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
	skillMasteries: {
		[skillName: string]: {
			skillName: string;
			skillLevel: number;
			skillType: string;
		};
	};
	trades: {
		[tradeName: string]: {
			tradeName: string;
			tradeLevel: number;
			tradeAttribute: Attributes;
		};
	};
	languages: {
		[languageName: string]: {
			languageName: string;
			languageLevel: number;
		};
	};
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

export const SKILL_MASTERY_LEVELS = [0, 2, 4, 6, 8, 10];

export const PRIME_SKILLS = ["Awareness"];

export const MIGHT_SKILLS = ["Athletics", "Intimidation"];

export const AGILITY_SKILLS = ["Acrobatics", "Trickery", "Stealth"];

export const CHARISMA_SKILLS = ["Animal", "Influence", "Insight"];

export const INTELLIGENCE_SKILLS = ["Investigation", "Medicine", "Survival"];

export const KNOWLEDGE_SKILLS = [
	"Arcana",
	"History",
	"Nature",
	"Occultism",
	"Religion",
];

