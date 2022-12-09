import { useSelector } from 'react-redux';
import NftCard from '../NftCard';
import './styles.scss';

const ListNft = () => {
  const products = useSelector((state) => state.nftMarketPlace.data.products);

  return (
    <div className="products__container">
      {
        // eslint-disable-next-line arrow-parens
        products.map(product => {
          return <NftCard product={product} key={product.id} />;
        })
      }
    </div>
  );
};

export default ListNft;
