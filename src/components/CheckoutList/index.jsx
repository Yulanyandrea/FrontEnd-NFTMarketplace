import { useSelector } from 'react-redux';
import './styles.scss';

import CheckoutItem from '../CheckoutItem';

const CheckoutList = () => {
  const total = useSelector((state) => state.nftMarketPlace?.total);
  const cartProducts = useSelector((state) => state.nftMarketPlace?.shoppingCart);

  return (
    <div className="list__container">
      <h2 className="list__title">Product List</h2>
      <div className="list__map">
        {cartProducts
          ? cartProducts.map((product) => (
            <CheckoutItem product={product} key={product._id} />
          ))
          : null}
      </div>
      <h2 className="list__title">Total price:</h2>
      <h3 className="list__totalprice">${total} usd</h3>
    </div>
  );
};

export default CheckoutList;
