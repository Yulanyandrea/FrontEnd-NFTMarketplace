import './styles.scss';
import { useParams } from 'react-router-dom';
import products from '../../assets/products.json';
import ListNft from '../../components/ListNft';
import ProductDetails from '../../components/ProductDetails';

const Details = () => {
  const { id } = useParams();
  const product = products[id];
  return (
    <div className="details__container">
      <ProductDetails product={product} />
      <h2 className="details__subtitle">Related Products</h2>
      <ListNft products={products} />
    </div>
  );
};

export default Details;
