import { LANGUAGE, SECTION, SINCE, SPOKEN_LANGUAGE } from "./Inputs"

export enum ACTION_TYPES {
  SET_SECTION_TYPE,
  SET_LANGUAGE_TYPE,
  SET_SPOKEN_LANGUAGE_TYPE,
  SET_SINCE_TYPE,
}

export type SetSectionAction = {
  type: ACTION_TYPES.SET_SECTION_TYPE
  payload: SECTION
}

export type SetLanguageAction = {
  type: ACTION_TYPES.SET_LANGUAGE_TYPE
  payload: LANGUAGE
}

export type SetSpokenLanguageAction = {
  type: ACTION_TYPES.SET_SPOKEN_LANGUAGE_TYPE
  payload: SPOKEN_LANGUAGE
}

export type SetSinceAction = {
  type: ACTION_TYPES.SET_SINCE_TYPE
  payload: SINCE
}

export type Action =
  | SetSectionAction
  | SetLanguageAction
  | SetSpokenLanguageAction
  | SetSinceAction;
