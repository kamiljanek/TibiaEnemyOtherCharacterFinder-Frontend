import { createContext, Dispatch, SetStateAction } from "react";

export const SearchedCharacterNameContext = createContext<[string, Dispatch<SetStateAction<string>>]>(["", () => {}]);
