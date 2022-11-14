import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
// eslint-disable-next-line no-unused-vars
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import image from './images/image-equilibrium.jpg';
import avatar from './images/image-avatar.png';

// eslint-disable-next-line react/prop-types, object-curly-newline
const NftCard = ({ bit, name, bid, price, likes }) => {
  return (
    <section className="card">
      <figure className="card__figure">
        <img src={image} alt="Equilibrium" className="card__image" />
      </figure>
      <div className="card__body">
        <section className="card__biders">
          <div className="avatar__container">
            <img src={avatar} alt="avatar" className="card__avatar" />
            <img src={avatar} alt="avatar" className="card__avatar" />
            <img src={avatar} alt="avatar" className="card__avatar" />
            <h4 className="avatar__text">{bit} Place Bit.</h4>
          </div>
          <button className="card__button" type="button">...</button>
        </section>
        <div className="card__info">
          <h2 className="card__title--color">{name}</h2>
          <h3 className="card__subtitle">Highest bid {bid}</h3>
          <div className="card__stats">
            <h4 className="nft__price">{price}wETH</h4>
            <div className="card__like">
              <FontAwesomeIcon icon={farHeart} />
              <h4 className="card__totalikes">{likes}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NftCard;
