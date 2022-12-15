/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import TopCollection from '../../components/TopCollection/index';
import './style.scss';

const Our = () => {
  const collection = useSelector((state) => state.nftMarketPlace.data.collection);

  return (
    <div className="bigbox">
      {
        // eslint-disable-next-line react/prop-types
        collection?.map((data) => {
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
