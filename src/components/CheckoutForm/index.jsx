import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import { BuyNft } from '../../feature/api/counterApi';
import CheckoutModal from '../CheckoutModal';

import './styles.scss';

const options = { style: { base: { color: '#f6f6f6', '::placeholder': { color: '#acacac', background: '#212E48' } }, invalid: { color: '#9e2146' } } };

const CheckoutForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  const total = useSelector((state) => state.nftMarketPlace?.total);

  const stripe = useStripe();
  const elements = useElements();

  let response = '';

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log(error);
      return;
    }

    response = await BuyNft(paymentMethod, total);

    if (response) {
      setIsOpen(true);
      setData(response);
    }

    elements.getElement(CardElement).clear();
  };

  return (
    <div className="checkoutForm__container">
      <h3 className="checkoutForm__title">Card info:</h3>
      <form className="checkoutForm" onSubmit={handleSubmit}>
        <CardElement options={options} />
        <button className="checkoutForm__button" type="submit">Pay</button>
      </form>
      {isOpen && <CheckoutModal setIsOpen={setIsOpen} data={data} />}
    </div>
  );
};

export default CheckoutForm;
