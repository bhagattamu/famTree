import { useContext, createContext } from 'react';

export const FamilyContext = createContext();

export const useFamilyContext = () => useContext(FamilyContext);