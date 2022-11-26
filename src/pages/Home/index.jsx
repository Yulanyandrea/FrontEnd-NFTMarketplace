import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import './style.scss';
import hero from '../../assets/hero.png';
import ListNft from '../../components/ListNft';

const Home = () => {
  const hiddenDesktop = useMediaQuery({
    query: '(max-width: 1439px)',
  });

  const hiddenMobile = useMediaQuery({
    query: '(min-width: 1440px)',
  });

  return (
    <div className="home">
      <div className="home-hero">
        <div className="home-hero-info">
          {hiddenDesktop && <img className="home-hero-img" src={hero} alt="hero" />}
          <div className="home-hero-info__text">
            <h1 className="home-hero-info__title">Discover Digital Art, Collect and Sell Your Specific NFTs.</h1>
            <p className="home-hero-info__description">Partner with one of the world`s largest retailers to showcase your brand and products.
            </p>
            {hiddenMobile && (
              <div className="home-hero-buttons">
                <button type="button" className="home-hero-button__started">
                  Get Started
                </button>
                <button type="button" className="home-hero-button__create">
                  Create
                </button>
              </div>
            )}
          </div>
          {hiddenMobile && <img className="home-hero-img" src={hero} alt="hero" />}
        </div>
        {hiddenDesktop && (
          <div className="home-hero-buttons">
            <button type="button" className="home-hero-button__started">
              Get Started
            </button>
            <button type="button" className="home-hero-button__create">
              Create
            </button>
          </div>
        )}
      </div>
      <div className="home-livebidding">
        <div className="home-livebidding__title">
          <FontAwesomeIcon icon={faCircleDot} style={{ color: '#00A3FF' }} className="home-livebidding__title__img" />
          <h1 className="home-livebidding-title">Live Bidding</h1>
        </div>
        <ListNft />
      </div>
    </div>
  );
};

export default Home;
