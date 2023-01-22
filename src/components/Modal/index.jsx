import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { addToCart } from '../../feature/api/counterSlice';

import './styles.scss';

// eslint-disable-next-line react/prop-types
const Modal = ({ setIsOpen }) => {
  const product = useSelector((state) => state.nftMarketPlace.currentSelect);
  const dispatch = useDispatch();

  const handleBid = (data) => {
    dispatch(addToCart(data));
    setIsOpen(false);
  };

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className="darkBackground" onClick={() => setIsOpen(false)}>
      <div className="modal__centered">
        <div className="modal__container">
          <div className="modal__header">
            <h5 className="modal__heading">Place a bid</h5>
          </div>
          <button type="button" className="modal__closeButton" onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faXmark} style={{ color: '#ACACAC' }} />
          </button>
          <div className="modal__content">
            Yo are about to purchase this product from Nuron.
            <br />
            Are you sure you want to purchase the item?
          </div>
          <div className="modal__actions}">
            <div className="actions__container">
              <button type="button" className="confirm__button" onClick={() => handleBid(product)}>
                Purchase
              </button>
              <button type="button" className="cancel__button" onClick={() => setIsOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
