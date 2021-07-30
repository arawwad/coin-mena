import { useLocation } from 'react-router';
import styles from './Header.module.css';

type descriptionMapType = {
  [key: string]: string;
};

const descriptionMap: descriptionMapType = {
  repositories: 'See what the GitHub community is most excited about today.',
  developers: 'These are the developers building the hot tools today.',
};

export const Header = () => {
  const page = useLocation().pathname.slice(1);
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Trending</h1>
      <h3 className={styles.subtitle}>{descriptionMap[page]}</h3>
    </div>
  );
};
