import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import './styles.scss';

import CheckoutList from '../../components/CheckoutList';
import CheckoutForm from '../../components/CheckoutForm';

// eslint-disable-next-line max-len
const stripePromise = loadStripe('pk_test_51MEywtKxQEKWpZmHIePBopv3mnBUK0wKxe87BIeSxPEQppGH7S2P8YxXFgsZ6WdYfD0uvxFn691HZgSNzUY4FT0900M9gmk14C');

const Payment = () => {
  return (
    <div className="checkout__container">
      <div className="elements__container">
        <CheckoutList />
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
