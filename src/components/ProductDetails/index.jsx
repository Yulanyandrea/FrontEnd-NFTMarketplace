import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import avatar from '../../assets/image-avatar.png';

// eslint-disable-next-line react/prop-types, object-curly-newline
const ProductDetails = ({ product = {} }) => {
  // eslint-disable-next-line object-curly-newline
  const { image, name, bid, likes, number, owner } = product;

  return (
    <div className="product__container">
      <section className="images__container">
        <img src={image} alt="NFT" className="product__image" />
      </section>
      <section className="info__container">
        <section className="product__info">
          <h1 className="product__title--color">{name}</h1>
          <div className="title__buttons">
            <div className="product__like">
              <button type="button" className="like__button">
                <FontAwesomeIcon icon={farHeart} />
              </button>
              <h4 className="product__totalikes">{likes}</h4>
            </div>
            <button className="product__button" type="button">...</button>
          </div>
        </section>
        <section>
          <h4 className="product__bid">Height bid <span className="product__bid--color">{bid}wETH</span></h4>
          <h2 className="product__ranking">#{number} Portal, Info Bellow</h2>
        </section>
        <section className="info__buttons">
          <button className="info__button" type="button">Bids</button>
          <button className="info__button" type="button">Details</button>
          <button className="info__button" type="button">History</button>
        </section>
        <section className="product__owner">
          <h4>Owner</h4>
          <img src={avatar} alt="avatar" className="owner__avatar" />
          <h3>{owner}</h3>
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
            <h3>Heighest bid {owner}</h3>
            <h3>{bid}wETH</h3>
          </div>
          <button className="bid__button" type="button">Place a Bid</button>
        </section>
      </section>
    </div>
  );
};

export default ProductDetails;
