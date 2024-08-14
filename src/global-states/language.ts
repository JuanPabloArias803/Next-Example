import { create } from 'zustand'

interface ILanguageState{
    language:string;
    setLanguage:(value:string)=>void;
}

export const useLanguage = create<ILanguageState>((set) => ({
  language: 'english',
  setLanguage: (value) => set(() => ({ language: value }))
}))