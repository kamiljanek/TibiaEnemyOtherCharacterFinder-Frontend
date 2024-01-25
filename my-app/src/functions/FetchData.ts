import { CharacterResponse, ErrorResponse, SimilarCharactersResponse } from "../types/CharacterResult";

const baseUrl = "https://tibia.bieda.it/api/tibia-eocf/v1/characters";

const fetchCharacterData = async (
    input: string, 
    setCharacterData: (characterData: CharacterResponse | ErrorResponse | null) => void
  ) : Promise<void> => {
      const result = await fetch(`${baseUrl}/${input}`);
      const data = await result.json(); 
      setCharacterData(data);
      return Promise.resolve();
  };

const fetchPromptData = async (input: string, setPromptData: (promptData: string[]) => void) => {
    await fetch(`${baseUrl}/prompt?searchText=${input}&page=1&pageSize=10`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPromptData(data);
      });
  };

const fetchSimilarCharacterData = async (input: string, setSimilarCharactersData: (similarCharactersData: SimilarCharactersResponse | null) => void) => {
    await fetch(`${baseUrl}?searchText=${input}&page=1&pageSize=10`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSimilarCharactersData(data);
      });
  };

export {fetchCharacterData, fetchPromptData, fetchSimilarCharacterData};
