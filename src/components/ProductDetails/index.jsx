/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { useSelector } from 'react-redux';
import Modal from '../Modal';

import './styles.scss';

const ProductDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const product = useSelector((state) => state.nftMarketPlace?.currentSelect);
  const currentuser = useSelector((state) => state.nftMarketPlace?.user);
  const users = useSelector((state) => state.nftMarketPlace?.dataUser);
  const owner = users.find((user) => user._id === product.owner);
  const creator = users.find((user) => user._id === product.createdBy);
  const findProduct = useSelector((state) => state.nftMarketPlace?.shoppingCart);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product?._id]);

  const producBuy = findProduct.find(({ _id }) => _id === product._id);
  // console.log('find: ', producBuy);
  // console.log('current select: ', product._id);

  return (
    <div className="product__container">
      <section className="images__container">
        <img src={product?.images} alt="NFT" className="product__image" />
      </section>
      <section className="info__container">
        <section className="product__info">
          <h1 className="product__title--color">{product?.name}</h1>
          <div className="title__buttons">
            <div className="product__like">
              <button type="button" className="like__button">
                <FontAwesomeIcon icon={farHeart} />
              </button>
              <h4 className="product__totalikes">{product?.likes.length}</h4>
            </div>
          </div>
        </section>
        <section>
          <h4 className="product__bid">
            Price:{' '}
            <span className="product__bid--color">{product?.price} wETH</span>
          </h4>
          <h2 className="product__ranking">
            Info Bellow
          </h2>
        </section>
        <section className="info__buttons">
          <button className="info__button" type="button">
            Bids
          </button>
          <button className="info__button" type="button">
            Details
          </button>
        </section>
        <section className="product__owner">
          <h4>Created by: </h4>
          <img src={creator?.profilepicture} alt="avatar" className="owner__avatar" />
          <h3>
            {creator?.firstname}
            {creator?.lastname}
          </h3>
        </section>
        <section>
          <h4>Categories</h4>
          <div className="product__tag">
            <h4>{product?.categories}</h4>
          </div>
        </section>
        <section className="place__bid">
          <h4>Owner</h4>
          <div className="bid__owner">
            <img src={owner?.profilepicture} alt="avatar" className="owner__avatar" />
            <h3>
              {owner?.firstname}
              {owner?.lastname}
            </h3>
            <h3>{product?.price} wETH</h3>
          </div>
          {(owner?._id === currentuser?.profile?._id) ? (
            <button
              className="bid__button--off"
              type="button"
            >
              Put on sale
            </button>
          ) : (producBuy ? (
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
              onClick={() => setIsOpen(true)}
            >
              Place a Bid
            </button>
          ))}
        </section>
      </section>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default ProductDetails;
