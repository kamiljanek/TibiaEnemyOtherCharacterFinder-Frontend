import { CharacterResponse, ErrorResponse } from "../types/CharacterResult";

const baseUrl = "https://tibia.bieda.it/api/tibia-eocf/v1/characters/";

const fetchCharacterData = async (input: string, setLoading: (loading: boolean) => void, setCharacterData: (characterData: CharacterResponse | ErrorResponse | null) => void) => {
    setLoading(true);
    await fetch(`${baseUrl}${input}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCharacterData(data);
      });
    setLoading(false);
  };

const fetchPromptData = async (input: string, setPromptData: (promptData: string[]) => void) => {
    await fetch(`${baseUrl}prompt?searchText=${input}&page=1&pageSize=10`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPromptData(data);
      });
  };

export {fetchCharacterData, fetchPromptData};
