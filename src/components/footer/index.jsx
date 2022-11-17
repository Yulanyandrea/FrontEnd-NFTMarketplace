import './style.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF, faTwitter, faInstagram, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';

const Footer = (props) => {
  const {
    image, name, characteristic, price,
  } = props;
  return (
    <div className="cardFooter">
      <section className="cardFooter__brand">
        <div className="cardFooter__containerImage">
          <img src={logo} alt="image_logo" className="cardFooter__image" />
          {/* <h2 className="cardFooter__brandName">nuron</h2> */}
        </div>
        <p className="cardFooter__text">Created with the collaboration of over
          60 of the world`s best Nuron Artist
        </p>
        <div className="cardFooter__update">
          <h2 className="cardFooter__titlebrand">Get the Latest Nuron Updates</h2>
          <div className="cardFooter__inputButton">
            <input type="text" className="cardFooter__username" />
            <button type="submit" className="cardFooter__subscribe">Subscibe</button>
          </div>
        </div>
        <p className="cardFooter__email">Email is safe. We don`t spam</p>
      </section>

      <section className="cardFooter__Nuron">
        <h2 className="cardFooter__title">Nuron</h2>
        <p className="cardFooter__explore">Protocol Explore</p>
        <p className="cardFooter__token">System Token</p>
        <p className="cardFooter__time">Otimize Time</p>
        <p className="cardFooter__checking">Visual Checking</p>
        <p className="cardFooter__system">Fadeup System</p>
        <p className="cardFooter__log">Activity Log</p>
        <p className="cardFooter__autoSince">System Auto Since</p>
      </section>

      <section className="cardFooter__information">
        <h2 className="cardFooter___informationTitle">Information</h2>
        <p className="cardFooter__market">Market Explore</p>
        <p className="cardFooter__readytoken">Ready Token</p>
        <p className="cardFooter__option">Main Option</p>
        <p className="cardFooter__product">Product Checking</p>
        <p className="cardFooter__grid">Blog Grid</p>
        <p className="cardFooter__about">About Us</p>
        <p className="cardFooter__bug">Fix Bug</p>
      </section>

      <section className="cardFooter__soldout">
        <h2 className="cardFooter__sold">Recent Sold Out</h2>
        <div className="cardFooter__product1">
          <img src={image} alt="" className="cardFooter__image1" />
          <h3 className="cardFooter__nameNFT">{name}</h3>
          <p className="cardFooter__characteristic">{characteristic}</p>
          <p className="cardFooter__price">${price}</p>
        </div>

        <div className="cardFooter__product1">
          <img src={image} alt="" className="cardFooter__image1" />
          <h3 className="cardFooter__nameNFT">{name}</h3>
          <p className="cardFooter__characteristic">{characteristic}</p>
          <p className="cardFooter__price">${price}</p>
        </div>

        <div className="cardFooter__product1">
          <img src={image} alt="" className="cardFooter__image1" />
          <h3 className="cardFooter__nameNFT">{name}</h3>
          <p className="cardFooter__characteristic">{characteristic}</p>
          <p className="cardFooter__price">${price}</p>
        </div>
      </section>
      <section className="cardFooter__lastfooter">
        <p className="cardFooter__inc">@2022 Nuron, Inc. All rights reserved.</p>
        <p className="cardFooter__policy">Terms . Privacy Policy</p>
        <div className="cardFooter__socialMedia">
          <FontAwesomeIcon icon={faFacebookF} style={{ color: 'white' }} className="cardFooter__facebook" />
          <FontAwesomeIcon icon={faTwitter} style={{ color: 'white' }} className="cardFooter__facebook" />
          <FontAwesomeIcon icon={faInstagram} style={{ color: 'white' }} className="cardFooter__facebook" />
          <FontAwesomeIcon icon={faLinkedin} style={{ color: 'white' }} className="cardFooter__facebook" />
          <FontAwesomeIcon icon={faMessage} style={{ color: 'white' }} className="cardFooter__facebook" />

        </div>
      </section>

    </div>
  );
};

Footer.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  characteristic: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Footer;
