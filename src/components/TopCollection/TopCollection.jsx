import './style.scss';

const TopCollection = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    imageSell,
    // eslint-disable-next-line react/prop-types
    imageProfile,
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
        <p className="cardTopCollection__nameImage">Cubic Trad</p>
        <button type="submit" className="cardTopCollection__items"> 27 Items</button>
      </div>

    </div>
  );
};
export default TopCollection;
