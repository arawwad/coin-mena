import { useQuery } from 'react-query';
import { useParams } from '../../contexts/params';
import { fetchRepos } from '../../service';
import { RepositoryListItem } from './Repository';

const Repositories = () => {
  const { params } = useParams();
  const { data: repositories = []} = useQuery(
    'repos',
    fetchRepos(params)
  );
  return (
    <>
      {repositories.map((repository) => {
          return <RepositoryListItem key={repository.repositoryName} repository={repository} />;
      })}
    </>
  );
};

export default Repositories;
