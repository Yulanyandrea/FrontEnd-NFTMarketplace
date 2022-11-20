import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import image from '../../assets/image-equilibrium.jpg';
import avatar from '../../assets/image-avatar.png';

// eslint-disable-next-line react/prop-types, object-curly-newline
const ProductDetails = ({ name, likes }) => {
  return (
    <div className="product__container">
      <section className="images__container">
        <img src={image} alt="NFT" className="product__image" />
      </section>
      <section className="product__info">
        <h2 className="product__title--color">{name}</h2>
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
      <section className="product__owner">
        <h4>Owner</h4>
        <img src={avatar} alt="avatar" className="owner__avatar" />
      </section>
    </div>
  );
};

export default ProductDetails;
