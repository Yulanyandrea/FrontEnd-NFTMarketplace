import ListNft from '../../components/ListNft';
import ProductDetails from '../../components/ProductDetails';
import './styles.scss';

const Details = () => {
  return (
    <div className="details__container">
      <ProductDetails />
      <h2 className="details__subtitle">Related Products</h2>
      <ListNft />
    </div>
  );
};

export default Details;
