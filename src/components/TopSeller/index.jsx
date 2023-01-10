import PropTypes from 'prop-types';
import './style.scss';

const TopSeller = (props) => {
  const { imageTop, textTop, priceTop } = props;

  return (
    <div className="cardTopSeller">
      <section className="cardTopSeller__Containerimage">
        <img src={imageTop} alt="" className="cardTopSeller__image" />
      </section>
      <section className="cardTopSeller__Containertext">
        <h2 className="cardTopSeller__title">{textTop}</h2>
        <p className="cardTopSeller__priceTop">{priceTop}</p>
      </section>
    </div>
  );
};

TopSeller.propTypes = {
  imageTop: PropTypes.string.isRequired,
  textTop: PropTypes.string.isRequired,
  priceTop: PropTypes.number.isRequired,
};

export default TopSeller;
