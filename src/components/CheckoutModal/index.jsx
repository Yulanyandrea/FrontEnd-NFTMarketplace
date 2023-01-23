/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { resetCart, fetchData, fetchUsers } from '../../feature/api/counterSlice';
import { updateOwner } from '../../feature/api/counterApi';

import './styles.scss';

// eslint-disable-next-line react/prop-types
const CheckoutModal = ({ setIsOpen, data }) => {
  const product = useSelector((state) => state.nftMarketPlace?.shoppingCart);
  const newOwner = useSelector((state) => state.nftMarketPlace?.user?.profile?._id);
  const { message, payment } = data;
  const dispatch = useDispatch();
  const dispatchData = () => {
    dispatch(fetchData());
    dispatch(fetchUsers());
    dispatch(resetCart());
  };

  const handleConfirm = () => {
    setIsOpen(false);
    product.forEach((element) => updateOwner(element._id, newOwner));
    dispatchData();
  };

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div>
      {message === 'sucessfull' ? (
        <div className="darkBackground" onClick={() => handleConfirm()}>
          <div className="modal__centered">
            <div className="modal__container">
              <div className="modal__header">
                <h5 className="modal__heading">Payment Sucessfull</h5>
              </div>
              <div className="modal__content">
                Payment id:
                <br />
                {payment.id}
              </div>
              <div className="modal__actions}">
                <div className="actions__container">
                  <button type="button" className="confirm__button" onClick={() => handleConfirm()}>
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="darkBackground" onClick={() => setIsOpen(false)}>
          <div className="modal__centered">
            <div className="modal__container">
              <div className="modal__header">
                <h5 className="modal__heading">Payment Rejected</h5>
              </div>
              <div className="modal__content">
                Something went wrong
                <br />
                Please try again
              </div>
              <div className="modal__actions}">
                <div className="actions__container">
                  <button type="button" className="confirm__button">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutModal;
