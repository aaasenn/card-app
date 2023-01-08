import { words } from "../../constants/wordsArray";
import { EDIT } from "./constants";
import { IUser, IAction } from "./types";

const initialState: IUser = {
  name: "",
  surname: "",
  numberOfDisplayedWords: 5,
  dateOfBirth: "",
  prefferebleEnglish: "AU",
  sex: "m",
  isDynamicDifficulty: false,
  englishLevel: 0,
};

export const userReducer = (init: IUser = initialState, action: IAction) => {
  switch (action.type) {
    case EDIT: {
        return {
          ...init,
          ...action.payload,
        };
    }

    default: {
      return init;
    }
  }
};
