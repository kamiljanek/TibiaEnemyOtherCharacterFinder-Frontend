export type CharacterResponse = {
  name: string;
  world: string;
  vocation: string;
  level: number;
  lastLogin: Date;
  formerNames: string[];
  formerWorlds: string[];
  traded: boolean;
  otherVisibleCharacters: string[];
  possibleInvisibleCharacters: PossibleInvisibleCharacterResponse[];
};

export type PossibleInvisibleCharacterResponse = {
  otherCharacterName: string;
  numberOfMatches: number;
  firstMatchDateOnly: Date;
  lastMatchDateOnly: Date;
};

export type SimilarCharactersResponse = {
  totalCount: number;
  names: string[];
};

export type ErrorResponse = {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance: string;
};
