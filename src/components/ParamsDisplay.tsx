import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { setLanguageAction, setSinceAction, setSpokenLanguageAction } from '../Actions';
import { useParams } from '../contexts/params';
import { LANGUAGE, SINCE, SPOKEN_LANGUAGE } from '../types/Inputs';
import styles from './ParamsDisplay.module.scss';
import { Select } from './Select';

export const ParamsDisplay: FC = () => {
  const { params, dispatch } = useParams();
  const page = useLocation().pathname.slice(1);
  return (
    <div className={styles.wrapper}>
      <div className={styles.linkGroup}>
        <NavLink
          className={styles.link}
          activeClassName={styles.active}
          to="/repositories"
        >
          Repositories
        </NavLink>
        <NavLink
          className={styles.link}
          activeClassName={styles.active}
          to="/developers"
        >
          Developers
        </NavLink>
      </div>
      <div className={styles.selects}>
        {page === 'developers' && (
          <div>
            Spoken Language:{' '}
            <Select
              value={params.spokenLanguage}
              onChange={(e) =>
                dispatch(setSpokenLanguageAction(e.target.value as SPOKEN_LANGUAGE))
              }
              items={Object.values(SPOKEN_LANGUAGE)}
            />
          </div>
        )}
        <div>
          Language:{' '}
          <Select
            value={params.language}
            onChange={(e) =>
              dispatch(setLanguageAction(e.target.value as LANGUAGE))
            }
            items={Object.values(LANGUAGE)}
          />
        </div>
        <div>
          Date range:{' '}
          <Select
            value={params.since}
            onChange={(e) =>
              dispatch(setSinceAction(e.target.value as SINCE))
            }
            items={Object.values(SINCE)}
          />
        </div>
      </div>
    </div>
  );
};
