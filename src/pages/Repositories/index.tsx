import { useQuery } from 'react-query';
import { useParams } from '../../contexts/params';
import { fetchRepos } from '../../service';
import { RepositoryListItem } from './Repository';

const Repositories = () => {
  const { params } = useParams();
  const { data: repositories = []} = useQuery(
    ['repos', params],
    fetchRepos(params)
  );
  return (
    <div>
      {repositories.map((repository) => {
          return <RepositoryListItem key={repository.repositoryName} repository={repository} />;
      })}
    </div>
  );
};

export default Repositories;
