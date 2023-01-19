import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

// eslint-disable-next-line react/prop-types
const CheckoutItem = ({ product = {} }) => {
  const {
    images,
    name,
    price,
  } = product;

  return (
    <div className="Item__container">
      <div className="Item__subcontainer">
        <img src={images} alt="NFT" className="item__image" />
        <div>
          <h2>Title: {name}</h2>
          <p>Price: {price} usd</p>
        </div>
      </div>
      <button type="button" className="item__button">
        <FontAwesomeIcon icon={faTrash} style={{ color: '#ACACAC' }} />
      </button>
    </div>
  );
};

export default CheckoutItem;
