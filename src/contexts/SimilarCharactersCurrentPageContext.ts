import { createContext, Dispatch, SetStateAction } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const SimilarCharactersCurrentPageContext = createContext<[number, Dispatch<SetStateAction<number>>]>([1, () => {}]);
