import { createContext, useContext, useReducer, Dispatch, FC } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Action, ACTION_TYPES } from '../types/Actions';
import { Developer } from '../types/Developer';
import { Repository } from '../types/Repository';
import { LANGUAGE, SECTION, SPOKEN_LANGUAGE, SINCE } from '../types/Inputs';

type Params = {
  section: SECTION;
  language: LANGUAGE;
  spokenLanguage: SPOKEN_LANGUAGE;
  since: SINCE;
};

function reducer(params: Params, action: Action): Params {
  switch (action.type) {
    case ACTION_TYPES.SET_SECTION_TYPE:
      return {
        ...params,
        section: action.payload,
      };
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
  section: SECTION.repositories,
  language: LANGUAGE.JavaScript,
  since: SINCE.daily,
  spokenLanguage: SPOKEN_LANGUAGE.English,
};

type ResourceContext = {
  params: Params;
  dispatch: Dispatch<Action>;
  resources: Developer[] | Repository[];
};

const context = createContext<ResourceContext>({
  resources: [],
  params: initialParams,
  dispatch() {},
});

const fetchResources =
  ({ section, ...params }: Params) =>
  () =>
    axios
      .get<Developer[] | Repository[]>(
        `http://gh-trending-api.herokuapp.com/${section}`,
        {
          params,
        }
      )
      .then((res) => res.data);

const useResources = () => useContext(context);
const ResourcesProvider: FC = ({ children }) => {
  const [params, dispatch] = useReducer(reducer, initialParams);
  const { data: resources = [] } = useQuery<Developer[] | Repository[], Error>(
    'resources',
    fetchResources(params)
  );
  return (
    <context.Provider value={{ resources, params, dispatch }}>
      {children}
    </context.Provider>
  );
};

export { useResources, ResourcesProvider };
