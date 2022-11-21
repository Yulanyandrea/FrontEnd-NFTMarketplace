import './style.scss';
import TopCollection from '../../components/TopCollection/index';

// eslint-disable-next-line react/prop-types
const Our = ({ informations = [] }) => {
  return (
    <div className="bigbox">
      {
        // eslint-disable-next-line react/prop-types
        informations.map((data) => {
          // console.log(data);
          return (
            <TopCollection data={data} key={data.id} />
          );
        })
      }
    </div>
  );
};
export default Our;
