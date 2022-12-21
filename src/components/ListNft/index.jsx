import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { setCurrentData } from '../../feature/api/counterSlice';
import avatar from '../../assets/image-avatar.png';
import './styles.scss';

const ListNft = () => {
  const allProducts = useSelector((state) => state.nftMarketPlace.data.products);

  const dispatch = useDispatch();

  const getDataProduct = (data) => {
    dispatch(setCurrentData(data));
  };

  return (
    <div className="products__container">
      {allProducts
        ? allProducts.map((product) => (
          <section className="card" key={product.id}>
            <Link
              to={`/productdetail/${product.id}`}
              className="card__link"
              onClick={() => getDataProduct(product)}
            >
              <img src={product.image} alt="NFT" className="card__image" />
            </Link>
            <div className="card__body">
              <section className="card__biders">
                <div className="avatar__container">
                  <img src={avatar} alt="avatar" className="card__avatar" />
                  <img src={avatar} alt="avatar" className="card__avatar" />
                  <img src={avatar} alt="avatar" className="card__avatar" />
                  <h4 className="avatar__text">{product.bit} Place Bit.</h4>
                </div>
                <button className="card__button" type="button">
                  ...
                </button>
              </section>
              <div className="card__info">
                <h2 className="card__title--color">{product.name}</h2>
                <h3 className="card__subtitle">Highest bid {product.bid}</h3>
                <div className="card__stats">
                  <h4 className="nft__price">{product.price}wETH</h4>
                  <div className="card__like">
                    <FontAwesomeIcon icon={farHeart} />
                    <h4 className="card__totalikes">{product.likes}</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))
        : null}
    </div>
  );
};

export default ListNft;
