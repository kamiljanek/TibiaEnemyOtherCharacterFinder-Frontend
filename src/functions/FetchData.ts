import { CharacterResponse, ErrorResponse, SimilarCharactersResponse } from "../types/CharacterResult";

const baseUrl = "https://api.tibiastalker.pl/api/tibia-stalker/v1/characters";

const fetchCharacterData = async (input: string, setCharacterData: (characterData: CharacterResponse | ErrorResponse) => void): Promise<void> => {
  const result = await fetch(`${baseUrl}/${input}`);
  const data = await result.json();
  setCharacterData(data);
  return Promise.resolve();
};

const fetchPromptData = async (input: string, setPromptData: (promptData: string[]) => void): Promise<void> => {
  const result = await fetch(`${baseUrl}/prompt?searchText=${input}&page=1&pageSize=10`);
  const data = await result.json();
  setPromptData(data);
  return Promise.resolve();
};

// example: ek a
const fetchSimilarCharactersData = async (input: string, page: number, setSimilarCharactersData: (similarCharactersData: SimilarCharactersResponse) => void): Promise<void> => {
  const result = await fetch(`${baseUrl}?searchText=${input}&page=${page}&pageSize=10`);
  const data = await result.json();
  setSimilarCharactersData(data);
  return Promise.resolve();
};

export { fetchCharacterData, fetchPromptData, fetchSimilarCharactersData };
