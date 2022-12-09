import './styles.scss';
import { useState, useEffect } from 'react';
import NftCard from '../NftCard';

import { getAllProducts } from '../../hook/products';

// eslint-disable-next-line react/prop-types
const ListNft = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

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
