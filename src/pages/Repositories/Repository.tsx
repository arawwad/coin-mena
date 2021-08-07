import { FC } from 'react';
import { Repository } from '../../types/Repository';

type RepositoryListItemProps = {
  repository: Repository;
};

export const RepositoryListItem: FC<RepositoryListItemProps> = ({ repository }) => (
  <div>{repository.repositoryName}</div>
);
