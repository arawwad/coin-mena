import { FC } from 'react';
import { Repository } from '../../types/Repository';
import styles from './Repository.module.scss';
import { GoRepo, GoRepoForked, GoStar } from 'react-icons/go'

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
        <GoRepo size="14" className={styles.icon} />{repository.username} / {repository.repositoryName}
      </div>
      <div className={styles.description}>{repository.description}</div>
      <div className={styles.stats}>
        <span>{repository.language}</span>
        <span><GoStar className={styles.icon} />{repository.totalStars}</span>
        <span><GoRepoForked className={styles.icon} />{repository.forks}</span>
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
      <p><GoStar size="16" className={styles.icon} />{repository.starsSince} stars {SINCE_MAP[repository.since]}</p>
    </div>
  </div>
);
