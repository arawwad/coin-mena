import { useQuery } from 'react-query';
import { useParams } from '../../contexts/params';
import { fetchDevs } from '../../service';
import { DeveloperListItem } from './Developer';

const Developers = () => {
  const { params } = useParams();
  const { data: developers = []} = useQuery(
    ['devs', params],
    fetchDevs(params)
  );
  return (
    <div>
      {developers.map((developer) => {
          return <DeveloperListItem key={developer.username} developer={developer} />;
      })}
    </div>
  );
};

export default Developers;
