import { useDispatch, useSelector } from 'react-redux';
import { setCurrentData } from '../../feature/api/counterSlice';
import NftCard from '../NftCard';

import './styles.scss';

const ListNft = () => {
  const allProducts = useSelector((state) => state.nftMarketPlace?.data);

  const dispatch = useDispatch();

  const getDataProduct = (data) => {
    dispatch(setCurrentData(data));
  };

  return (
    <main className="nftList">
      <div className="nftList_map">
        {allProducts
          ? allProducts.map((product) => (
            <NftCard product={product} function={getDataProduct} key={product._id} />
          ))
          : null}
      </div>
    </main>
  );
};

export default ListNft;
