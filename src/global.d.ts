declare class Character {
	// Foundational aspecs a player chooses
	name: string;
	level: number;
	ancestry: string;
	ancestryFeatures: string[];
	attributes: {
		might: number;
		agility: number;
		charisma: number;
		intelligence: number;
	};
	attributeSaveMasteries: string[];
	skillMasteries: {
		[string]: { skillName: string; skillLevel: number; skillType: string };
	};
	trades: {
		[string]: { tradeName: string; tradeLevel: number; tradeAttribute: string };
	};
	languages: {
		[string]:{ languageName: string;
		languageLevel: number; }
	};
	charClass: string;
	classAttributes: {
		attributeName: string;
		attributeDesc: string;
	}[];
	armorBonus: number;
	flavor: string;

	// A list of things I'd want to save between sessions
	hp: PlayerCounter;
	mp: PlayerCounter;
	sp: PlayerCounter;
	ap: PlayerCounter;

	actions: {
		name: string;
		description: string;
	}[];

	constructor(params: CharacterCreationParams) {
		this.name = params.name;
		this.level = params.level;
		this.ancestry = params.ancestry;
		this.ancestryFeatures = params.ancestryFeatures;
		this.attributes = {
			might: params.might,
			agility: params.agility,
			charisma: params.charisma,
			intelligence: params.intelligence,
		};
		this.attributeSaveMasteries = params.attributeSaveMasteries;
		this.skillMasteries = params.skillMasteries;
		this.trades = params.trades;
		this.languages = params.languages;
		this.charClass = params.charClass;
		this.flavor = params.flavor;
		this.armorBonus = params.armorBonus
	}
	getPrime(): number {
		return Math.max(Object.values(this.attributes));
	}

	getCombatMastery(): number {
		return Math.ceil(this.level / 2);
	}

	getSaveBonus(attribute: string): number {
		const attributeBonus = this.attributes[attribute];
		const hasMastery =
			this.attributeSaveMasteries.findIndex(
				(mastery) => mastery === attribute,
			) > -1;

		return attributeBonus + hasMastery ? this.getCombatMastery() : 0;
	}

	getSkillBonus(skillName: string): number {
		const {skillType, skillLevel} = this.skillMasteries[skillName];

		return this.attributes[skillType] + skillMasteryLevels[skillLevel];
	}

	getTradeBonus(tradeName: string): number {
		const {tradeAttribute, tradeLevel} = this.trades

		return this.attributes[tradeAttribute] + skillMasteryLevels[tradeLevel];
	}

	getMaxHP(): number {
		return 6 + this.level + this.attributes.might
	}

	getPhysicalDefense(): number {
		return 8 + this.getCombatMastery() + this.armorBonus + this.attributes.agility
	}

	getMysticalDefense(): number {
		return 8 + this.getCombatMastery() + this.attributes.charisma + this.attributes.intelligence
	}

	getAttackCheck(): number {
		return this.getCombatMastery() + this.getPrime()
	}

	getSaveDC(): number {
		return 8 + this.getCombatMastery() + this.getPrime()
	}

	getMartialCheck(): number {
		return Math.max(this.getSkillBonus("Athletics"), this.getSkillBonus("Acrobatics"))
	}
}

const skillMasteryLevels = [0, 2, 4, 6, 8, 10];

declare type CharacterCreationParams = any;

declare type PlayerCounter = {
	current: number;
	max: number;
};
