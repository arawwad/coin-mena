import { createContext, useContext, useReducer, Dispatch, FC } from 'react';
import { Action, ACTION_TYPES } from '../types/Actions';
import { LANGUAGE, SPOKEN_LANGUAGE, SINCE } from '../types/Inputs';
import { Params } from '../types/Params';

function reducer(params: Params, action: Action): Params {
  switch (action.type) {
    case ACTION_TYPES.SET_LANGUAGE_TYPE:
      return {
        ...params,
        language: action.payload,
      };
    case ACTION_TYPES.SET_SPOKEN_LANGUAGE_TYPE:
      return {
        ...params,
        spokenLanguage: action.payload,
      };
    case ACTION_TYPES.SET_SINCE_TYPE: {
      return {
        ...params,
        since: action.payload,
      };
    }
    default:
      return params;
  }
}

const initialParams = {
  language: LANGUAGE.JavaScript,
  since: SINCE.daily,
  spokenLanguage: SPOKEN_LANGUAGE.English,
};

type ParamsContext = {
  dispatch: Dispatch<Action>;
  params: Params,
};

const context = createContext<ParamsContext>({
  params: initialParams,
  dispatch() {},
});

const useParams = () => useContext(context);
const ParamsProvider: FC = ({ children }) => {
  const [params, dispatch] = useReducer(reducer, initialParams);
  return (
    <context.Provider value={{ params, dispatch }}>
      {children}
    </context.Provider>
  );
};

export { useParams, ParamsProvider };
