import { Dispatch, SetStateAction, createContext } from 'react';

export const SimilarCharactersCurrentPageContext = createContext<[number, Dispatch<SetStateAction<number>>]>([1, () => {}]);