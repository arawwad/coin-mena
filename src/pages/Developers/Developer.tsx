import { FC } from 'react';
import { Developer } from '../../types/Developer';
import styles from './Developer.module.scss'

type DeveloperListItemProps = {
  developer: Developer;
};

export const DeveloperListItem: FC<DeveloperListItemProps> = ({ developer }) => (
  <div className={styles.wrapper}>
    <img className={styles.avatar} src={developer.avatar} alt={`${developer.name} profile pic`} />
    <div className={styles.name}>
      <h3 className={styles.fullName}>{developer.name}</h3>
      <p className={styles.userName}>{developer.username}</p>
    </div>
    <div className={styles.popularRepo}>
      <p className={styles.title}>popular repo</p>
      <p className={styles.repoName}>{developer.popularRepository.repositoryName}</p>
      <p className={styles.description}>{developer.popularRepository.description}</p>
    </div>
    <button>Follow</button>
  </div>
);
