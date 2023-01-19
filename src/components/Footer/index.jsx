import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import RecentAddNft from '../RecentAddNft';
import logo from '../../assets/logo.png';

import './style.scss';

const Footer = () => {
  const lastNftAdd = useSelector((state) => state.nftMarketPlace?.data);

  const nftEnd = (lastNftAdd?.length);
  const nftStart = nftEnd - 3;

  return (
    <main className="cardFooter">
      <section className="cardFooter-section">
        <section className="cardFooter__brand">
          <div className="cardFooter__containerImage">
            <img src={logo} alt="image_logo" className="cardFooter__image" />
          </div>
          <p className="cardFooter__text">Created with the collaboration of over
            60 of the world`s best Nuron Artist
          </p>
          <div className="cardFooter__update">
            <h2 className="cardFooter__titlebrand">Get the Latest Nuron Updates</h2>
            <div className="cardFooter__inputButton">
              <input type="text" className="cardFooter__username" placeholder="Your username" />
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
          <h2 className="cardFooter__sold">Recent Add</h2>
          {lastNftAdd ? lastNftAdd?.slice(nftStart, nftEnd).map((nft) => (
            <RecentAddNft nft={nft} key={nft._id} />
          )) : null }
        </section>
      </section>
      <section className="cardFooter__lastfooter">
        <p className="cardFooter__inc">@2022 Nuron, Inc. All rights reserved.</p>
        <p className="cardFooter__policy">Terms . Privacy Policy</p>
        <div className="cardFooter__socialMedia">
          <div className="cardFooter__socialMedia_box">
            <FontAwesomeIcon className="cardFooter__socialMedia_box_icon" icon={faFacebookF} style={{ color: 'white' }} />
          </div>
          <div className="cardFooter__socialMedia_box">
            <FontAwesomeIcon className="cardFooter__socialMedia_box_icon" icon={faTwitter} style={{ color: 'white' }} />
          </div>
          <div className="cardFooter__socialMedia_box">
            <FontAwesomeIcon className="cardFooter__socialMedia_box_icon" icon={faInstagram} style={{ color: 'white' }} />
          </div>
          <div className="cardFooter__socialMedia_box">
            <FontAwesomeIcon className="cardFooter__socialMedia_box_icon" icon={faLinkedin} style={{ color: 'white' }} />
          </div>
          <div className="cardFooter__socialMedia_box">
            <FontAwesomeIcon className="cardFooter__socialMedia_box_icon" icon={faMessage} style={{ color: 'white' }} />
          </div>

        </div>
      </section>

    </main>
  );
};

export default Footer;
