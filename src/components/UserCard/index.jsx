import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../feature/api/counterSlice';

import './styless.scss';

// eslint-disable-next-line react/prop-types
const UserCard = ({ user = {} }) => {
  const { firstname, lastname, _id } = user;

  const background = 'https://source.unsplash.com/random/200x200';
  const avatar = `https://robohash.org/${firstname}.png`;

  const allProducts = useSelector((state) => state.nftMarketPlace?.data);

  const filterOwned = allProducts?.filter(
    (nft) => nft.owner === _id,
  );

  const dispatch = useDispatch();

  const getDataUser = (data) => {
    dispatch(setCurrentUser(data));
  };

  return (
    <main className="usercard">
      <section className="usercard-images">
        <div className="usercard-images_cover">
          <img src={background} className="usercard-images_cover_bg" alt="cover" />
        </div>
        <div className="usercard-images_nft">
          {filterOwned
            ? filterOwned?.slice(0, 3).map((products) => (
              <img src={products.images} key={products._id} className="usercard-images_nft_onsale" alt="nft" />
            ))
            : null}
        </div>
        <div className="usercard-images_avatar">
          <img src={avatar} className="usercard-images_avatar_img" alt="avatar" />
        </div>
      </section>
      <section className="usercard-info">
        <div className="usercard-info_name">
          <h3 className="usercard-info_name_fullname">{firstname} {lastname}</h3>
        </div>
        <div className="usercard-info_button">
          <button
            type="button"
            className="usercard-info_button_totalnft"
            onClick={() => (getDataUser(user))}
          >
            {filterOwned?.length} items
          </button>
        </div>
      </section>
    </main>
  );
};

export default UserCard;
