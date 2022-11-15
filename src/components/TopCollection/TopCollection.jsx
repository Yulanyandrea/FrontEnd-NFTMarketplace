import './style.scss';
import PropTypes from 'prop-types';

const TopCollection = (props) => {
  const {
    imageSell,
    imageProfile,
    name,
    items,
  } = props;
  return (
    <div className="cardTopCollection">
      <img src={imageSell} alt="" className="cardTopCollection__image" />
      <img src={imageProfile} alt="" className="cardTopCollection__imageProfile" />
      <div className="cardTopCollection__smallImage">
        <img src={imageSell} alt="" className="cardTopCollection__imageOne" />
        <img src={imageSell} alt="" className="cardTopCollection__imageTwo" />
        <img src={imageSell} alt="" className="cardTopCollection__imageThree" />
      </div>

      <div className="cardTopCollection__footerText">
        <p className="cardTopCollection__nameImage">{name}</p>
        <button type="submit" className="cardTopCollection__items">{items}items</button>
      </div>

    </div>
  );
};

TopCollection.propTypes = {
  imageSell: PropTypes.string.isRequired,
  imageProfile: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  items: PropTypes.number.isRequired,
};
export default TopCollection;
