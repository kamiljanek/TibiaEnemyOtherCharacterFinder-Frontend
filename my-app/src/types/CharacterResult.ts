export type CharacterResult = {
  name: string;
  world: string;
  vocation: string;
  level: number;
  lastLogin: Date;
  formerNames: string[];
  formerWorlds: string[];
  traded: boolean;
  otherVisibleCharacters: string[];
  possibleInvisibleCharacters: PossibleInvisibleCharacterResult[];
};

export type PossibleInvisibleCharacterResult = {
  otherCharacterName: string;
  numberOfMatches: number;
  firstMatchDateOnly: Date;
  lastMatchDateOnly: Date;
};