import { createContext, Dispatch, SetStateAction } from "react";

export const SimilarCharactersCurrentPageContext = createContext<[number, Dispatch<SetStateAction<number>>]>([1, () => {}]);
