import './styles.scss';
import NftCard from '../NftCard';

// eslint-disable-next-line react/prop-types
const ListNft = ({ products = [] }) => {
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
