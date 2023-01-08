import { IWord } from './../../constants/wordsArray';
import { store } from '../index';

export interface IUser {
  name: string,
  surname: string,
  numberOfDisplayedWords: number,
  dateOfBirth: string,
  prefferebleEnglish: string,
  sex: 'm' | 'w',
  isDynamicDifficulty: boolean,
  englishLevel: number,
}

export interface IAction {
  type: string,
  payload?: Record<keyof IUser, any>
}

export type RootState = ReturnType<typeof store.getState>;