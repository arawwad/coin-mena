import { FC } from 'react';
import { Developer } from '../../types/Developer';

type DeveloperListItemProps = {
  developer: Developer;
};

export const DeveloperListItem: FC<DeveloperListItemProps> = ({ developer }) => (
  <div>{developer.username}</div>
);
