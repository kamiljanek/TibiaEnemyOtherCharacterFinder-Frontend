import { createContext, Dispatch, SetStateAction } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const SearchedCharacterNameContext = createContext<[string, Dispatch<SetStateAction<string>>]>(["", () => {}]);
