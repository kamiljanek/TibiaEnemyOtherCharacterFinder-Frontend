export type CharacterResult = {
  name: string;
  world: string;
  vocation: string;
  level: number;
  lastLogin: Date;
  formerNames?: string[];
  formerWorlds?: string[];
  traded: boolean;
  otherVisibleCharacters?: string[];
  possibleInvisibleCharacters?: PossibleInvisibleCharacterResult[];
};

export type PossibleInvisibleCharacterResult = {
  name: string;
  numberOfMatches: number;
  firstMatchDate: Date;
  lastMatchDate: Date;
};