import { FC } from 'react';
import { Repository } from '../../types/Repository';
import styles from './Repository.module.scss';

type RepositoryListItemProps = {
  repository: Repository;
};

const SINCE_MAP = {
  daily: 'today',
  weekly: 'this week',
  monthly: 'this month'
}

export const RepositoryListItem: FC<RepositoryListItemProps> = ({
  repository,
}) => (
  <div className={styles.wrapper}>
    <div className={styles.repoInfo}>
      <div className={styles.title}>
        {repository.username} / {repository.repositoryName}
      </div>
      <div className={styles.description}>{repository.description}</div>
      <div className={styles.stats}>
        <span>{repository.language}</span>
        <span>{repository.totalStars}</span>
        <span>{repository.forks}</span>
        <span>
          Built by
          {repository.builtBy.map((user) => (
            <img
              className={styles.miniAvatar}
              src={user.avatar}
              alt={`${user.username} profile pic`}
            />
          ))}
        </span>
      </div>
    </div>
    <div className={styles.stars}>
      <button>Star</button>
      <p>{repository.starsSince} stars {SINCE_MAP[repository.since]}</p>
    </div>
  </div>
);
