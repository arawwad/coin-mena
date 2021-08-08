import { ACTION_TYPES, SetLanguageAction, SetSinceAction, SetSpokenLanguageAction } from '../types/Actions';
import { LANGUAGE, SINCE, SPOKEN_LANGUAGE } from '../types/Inputs';

export const setSpokenLanguageAction = (
  payload: SPOKEN_LANGUAGE
): SetSpokenLanguageAction => ({
  type: ACTION_TYPES.SET_SPOKEN_LANGUAGE_TYPE,
  payload,
});

export const setLanguageAction = (
  payload: LANGUAGE
): SetLanguageAction =>({
  type: ACTION_TYPES.SET_LANGUAGE_TYPE,
  payload,
})

export const setSinceAction = (
  payload: SINCE
): SetSinceAction => ({
  type: ACTION_TYPES.SET_SINCE_TYPE,
  payload,
})