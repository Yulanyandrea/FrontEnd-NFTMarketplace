import './styles.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ListNft from '../../components/ListNft';
import ProductDetails from '../../components/ProductDetails';

import { getProduct } from '../../hook/products';

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [id]);

  return (
    <div className="details__container">
      <ProductDetails product={product} />
      <h2 className="details__subtitle">Related Products</h2>
      <ListNft />
    </div>
  );
};

export default Details;
