import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../feature/api/counterSlice';
import Modal from '../Modal';

import avatar from '../../assets/image-avatar.png';
import './styles.scss';

const ProductDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const product = useSelector((state) => state.nftMarketPlace.currentSelect);
  const dispatch = useDispatch();

  // onClick={() => (handleBid(product))

  const product = useSelector((state) => state.nftMarketPlace.currentSelect);
  const ownerUser = useSelector((state) => state.nftMarketPlace.dataUser);
  const findOwner = ownerUser.find((user) => user._id === product.owner);
  const findProduct = useSelector((state) => state.nftMarketPlace.shoppingCart);

  const producBuy = findProduct.find(({ _id }) => _id === product._id);
  // console.log('find: ', producBuy);
  // console.log('current select: ', product._id);

  // eslint-disable-next-line no-unused-vars
  const handleBid = (data) => {
    dispatch(addToCart(data));
  };

  return (
    <div className="product__container">
      <section className="images__container">
        <img src={product?.images} alt="NFT" className="product__image" />
        <img src={product?.images} alt="NFT" className="product__image" />
      </section>
      <section className="info__container">
        <section className="product__info">
          <h1 className="product__title--color">{product?.name}</h1>
          <h1 className="product__title--color">{product?.name}</h1>
          <div className="title__buttons">
            <div className="product__like">
              <button type="button" className="like__button">
                <FontAwesomeIcon icon={farHeart} />
              </button>
              <h4 className="product__totalikes">{product?.likes.length}</h4>
              <h4 className="product__totalikes">{product?.likes.length}</h4>
            </div>
            <button className="product__button" type="button">
              ...
            </button>
          </div>
        </section>
        <section>
          <h4 className="product__bid">
            Price:{' '}
            <span className="product__bid--color">{product?.price}wETH</span>
            Price:{' '}
            <span className="product__bid--color">{product?.price}wETH</span>
          </h4>
          <h2 className="product__ranking">
            #{product?.number} Portal, Info Bellow
            #{product?.number} Portal, Info Bellow
          </h2>
        </section>
        <section className="info__buttons">
          <button className="info__button" type="button">
            Bids
          </button>
          <button className="info__button" type="button">
            Details
          </button>
          <button className="info__button" type="button">
            History
          </button>
        </section>
        <section className="product__owner">
          <h4>Owner</h4>
          <img src={avatar} alt="avatar" className="owner__avatar" />
          <h3>
            {findOwner?.firstname}
            {findOwner?.lastname}
          </h3>
        </section>
        <section>
          <h4>Property</h4>
          <div className="product__tag">
            <h4>HYPE TYPE</h4>
            <h3>CALM AF (STILL)</h3>
          </div>
        </section>
        <section className="place__bid">
          <h4>Wining bit</h4>
          <div className="bid__owner">
            <img src={avatar} alt="avatar" className="owner__avatar" />
            <h3>
              Created by: {findOwner?.firstname}
              {findOwner?.lastname}
            </h3>
            <h3>{product?.price} wETH</h3>
          </div>
          {producBuy ? (
            <button
              className="bid__button--off"
              type="button"
            >
              Product is already in your cart
            </button>
          ) : (
            <button
              className="bid__button"
              type="button"
              onClick={() => handleBid(product)}
            >
              Place a Bid
            </button>
          )}
        </section>
      </section>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default ProductDetails;
