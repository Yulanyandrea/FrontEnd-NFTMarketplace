import { useSelector } from 'react-redux';
import NftCard from '../NftCard';
import './styles.scss';

const ListNft = () => {
  const allProducts = useSelector((state) => state.nftMarketPlace.data.products);

  return (
    <div className="products__container">
      {allProducts ? allProducts.map((product) => (
        <NftCard product={product} key={product.id} />
      )) : null}
    </div>
  );
};

export default ListNft;
