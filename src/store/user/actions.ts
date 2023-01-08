import { IWord } from "./../../constants/wordsArray";
import { EDIT } from "./constants";
import { IUser } from "./types";

export const editBioProp = (payload: Record<keyof IUser, any>) => ({
  type: EDIT,
  payload,
});