/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { LikeNft } from '../../feature/api/counterApi';
import { fetchData, setCurrentData } from '../../feature/api/counterSlice';
import avatar from '../../assets/image-avatar.png';

import './styles.scss';

// eslint-disable-next-line react/prop-types
const NftCard = ({ product = {} }) => {
  const {
    images,
    name,
    price,
    bit,
    bids,
    likes,
  } = product;

  const [userLike, setUserLike] = useState(likes);
  const [DataNft, setDataNft] = useState([]);

  const idUser = useSelector((state) => state.nftMarketPlace.user?.profile?._id);
  const idNft = product._id;
  const like = likes.includes(idUser);

  const dispatch = useDispatch();

  const idFilter = userLike.filter((e) => e !== idUser);

  useEffect(() => {
    if (like === false) {
      setUserLike([...likes, idUser]);
    } else {
      setUserLike(idFilter);
    }
  }, [like]);

  const handleNftData = (data) => {
    // event.preventDefault();
    dispatch(setCurrentData(data));
  };

  const handleLikes = async (event) => {
    event.preventDefault();
    const likeUser = { likes: userLike };
    try {
      await LikeNft(likeUser, idNft);
      dispatch(fetchData());
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
    }
  };

  return (
    <section className="card">
      <Link to={`/productdetail/${product._id}`} className="card__link" onClick={() => (handleNftData(product))}>
        <img src={images} alt="NFT" className="card__image" />
      </Link>
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
          <h3 className="card__subtitle">Highest bid {bids}</h3>
          <div className="card__stats">
            <h4 className="nft__price">{price}wETH</h4>
            <div className="card__like">
              <FontAwesomeIcon className="card__like_icon" icon={farHeart} onClick={handleLikes} />
              <h4 className="card__totalikes">{likes.length}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NftCard;
