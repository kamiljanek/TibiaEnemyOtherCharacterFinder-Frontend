import { Dispatch, SetStateAction, createContext } from 'react';

export const SearchedCharacterNameContext = createContext<[string, Dispatch<SetStateAction<string>>]>(["", () => {}]);